import { useState } from "react";
import styles from "./Register.module.css";
import { validateUser } from "../../helpers/validate"; // Importa la función de validación

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  //*Handlers
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
      name: form.name,
      email: form.email,
      password: form.password,
    };
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Usuario creado correctamente");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error al crear el usuario");
    });
  };

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}

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

        <label>Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.confirmPassword && errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
