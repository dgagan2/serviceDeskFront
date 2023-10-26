const expresiones = {
  txtPassword: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#$%^&.\-_\-.,"';~*?_~+%&#/]{6,20}$/,
  txtEmail: /^[a-zA-Z0-9_\-.~]{2,}@[a-zA-Z0-9_\-.~]{2,}\.[a-zA-Z]{2,4}$/,
  txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/
}
const validateForm = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.password.trim()) {
    errors.password = 'El campo contraseña es requerido'
  } else {
    if (!expresiones.txtPassword.test(input.password)) {
      errors.password = 'La contraseña debe tener minimo 6 caracteres'
    }
    if (input.password_two != input.password) {
      errors.password = 'Las contraseñas no coinciden'
    }
  }
  if (!input.name.trim()) {
    errors.name = 'El campo Nombre es requerido'
  } else {
    if (!expresiones.txtName.test(input.name)) {
      errors.firstname = 'Nombre no valido'
    }
  }

  return errors
}

export { validateForm }
