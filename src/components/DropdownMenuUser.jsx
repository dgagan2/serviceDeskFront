import iconUser from '../assets/iconUser.png'
const DropdownMenuUser = () => {
  return (
    <div className='dropdown' id='Container-dropdown-menu-user'>
      <button type='button' className='btn  dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuUser' aria-expanded='false'>
        <img src={iconUser} alt='' id='icon-user' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuUser'>
        <li className='dropdown-item disabled'>Bienvenido</li>
        <li><button className='dropdown-item'>Salir</button></li>
      </ul>
    </div>
  )
}

export default DropdownMenuUser
