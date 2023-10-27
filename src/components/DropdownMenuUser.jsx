import { useNavigate } from 'react-router-dom'
import iconUser from '../assets/iconUser.png'
import { useUserContext } from '../hooks/UseUserContext'
const DropdownMenuUser = () => {
  const { logout, userLoggedIn } = useUserContext()
  const navigate = useNavigate()
  const exit = () => {
    logout()
    navigate('/login')
  }
  return (
    <div className='dropdown' id='Container-dropdown-menu-user'>
      <button type='button' className='btn  dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuUser' aria-expanded='false'>
        <img src={iconUser} alt='' id='icon-user' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuUser'>
        <li className='dropdown-item disabled'>Bienvenido {userLoggedIn.name}</li>
        <li><button className='dropdown-item' onClick={() => exit()}>Salir</button></li>
      </ul>
    </div>
  )
}

export default DropdownMenuUser
