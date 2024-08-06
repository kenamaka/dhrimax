import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import UserComponents from './UserComponents'


const Users = ({ users }) => {
  
  const component = users.map((data, key) => {
    return (
      <UserComponents key={data.id} data={ data } />
    )
  })
  return (
      <>
      {component}
      </>
  )
}

export default Users