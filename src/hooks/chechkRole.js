import { getUserRoleById } from '../services/userRole'

async function checkRoles (id) {
  try {
    const response = await getUserRoleById(id)
    const role = response.data.nameRole
    return role
  } catch (error) {
    console.error(error)
  }
}

export default checkRoles
