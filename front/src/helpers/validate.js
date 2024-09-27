export const validateUser = ({ name, email, password, confirmPassword }) => {
  const errors = {};

  if (!name) {
    errors.name = "El nombre es obligatorio";
  }

  if (!email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!password) {
    errors.password = "La contraseña es obligatoria";
  } else if (password.length < 8) {
    errors.password = "Minimo 8 caracteres";
  }

  if (confirmPassword !== undefined && password !== confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};
