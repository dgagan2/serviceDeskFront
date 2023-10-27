import { checkRole } from '../services/rol'

async function checkRoles (id) {
  try {
    const response = await checkRole(id)
    const role = response.data.nameRole
    return role
  } catch (error) {
    console.error(error)
  }
}

export default checkRoles
