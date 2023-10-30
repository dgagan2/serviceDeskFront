import React from 'react'
import Header from '../../components/header/Header'
import AddState from '../../components/stateManager/AddState'
import StateManager from '../../components/stateManager/StateManager'
import { StateProvider } from '../../context/StateContext'

const State = () => {
  return (

    <>
      <Header />
      <StateProvider>
        <section className='container-manager-state m-4'>

          <AddState />
          <StateManager />
        </section>
      </StateProvider>

    </>

  )
}

export default State
