const expresiones = {
  txtEmail: /^[a-zA-Z0-9_\-.~]{2,}@[a-zA-Z0-9_\-.~]{2,}\.[a-zA-Z]{2,4}$/,
  txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/
}
const validateFormUser = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.name.trim()) {
    errors.name = 'El campo Nombre es requerido'
  } else {
    if (!expresiones.txtName.test(input.name)) {
      errors.firstname = 'Nombre no valido'
    }
  }
  if (!input.idDepartment.trim()) {
    errors.idDepartment = 'El campo departamento es requerido'
  }
  if (!input.idRole.trim()) {
    errors.idRole = 'El campo rol es requerido'
  }
  if (!input.idState.trim()) {
    errors.idState = 'El campo estado es requerido'
  }

  return errors
}

export { validateFormUser }
