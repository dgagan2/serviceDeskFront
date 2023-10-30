/* eslint-disable react/prop-types */
import UserDepartmentOptions from '../UserDepartmentOptions'
import UserRoleOptions from '../UserRoleOptions'
import UserStateOptions from '../UserStateOptions'

const OptionToRender = ({ optionSearch, input, handleInputChange }) => {
  if (optionSearch === 'email' || optionSearch === 'name') {
    return <input type='text' className='form-control' name='dataToSearch' value={input?.dataToSearch} onChange={handleInputChange} />
  }
  if (optionSearch === 'role') {
    return (
      <UserRoleOptions input={input} handleInputChange={handleInputChange} />
    )
  }
  if (optionSearch === 'state') {
    return (
      <UserStateOptions input={input} handleInputChange={handleInputChange} />
    )
  }

  if (optionSearch === 'department') {
    return (
      <UserDepartmentOptions input={input} handleInputChange={handleInputChange} />
    )
  }
}

export default OptionToRender
