import { useState } from "react";
import styles from "./Login.module.css";
import { validateUser } from "../../helpers/validate";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    if (value) {
      setErrors(validateUser({ ...form, [name]: value }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched({ ...touched, [name]: true });

    if (value) {
      setErrors(validateUser(form));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: form.email,
      password: form.password,
    };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Inicio de sesión exitoso");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al iniciar sesión");
      });
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
