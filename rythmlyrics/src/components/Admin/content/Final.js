import React from 'react'
import UserComponents from './UserComponents'


const Final = ({users}) => {
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

export default Final