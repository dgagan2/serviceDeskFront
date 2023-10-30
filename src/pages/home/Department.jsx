import React from 'react'
import Header from '../../components/header/Header'
import { DepartmentProvider } from '../../context/DepartmentContext'
import AddDepartment from '../../components/departmentManager/AddDepartment'
import DepartmentManager from '../../components/departmentManager/DepartmentManager'

const Department = () => {
  return (
    <>
      <Header />
      <DepartmentProvider>
        <section className='container-manager-department m-4'>

          <AddDepartment />
          <DepartmentManager />
        </section>
      </DepartmentProvider>

    </>
  )
}

export default Department
