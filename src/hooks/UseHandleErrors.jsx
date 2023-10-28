import { toast } from 'react-toastify'
const UseHandleErrors = (error) => {
  return toast.error(error?.response?.data?.message || error.message)
}

export default UseHandleErrors
