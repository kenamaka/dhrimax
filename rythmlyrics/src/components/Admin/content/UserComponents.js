import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const UserComponents = ({ data }) => {
  
    return (
        <>
             
                <div className="col-lg-4 col-md-12 text-center m-3 user-component">
                    <div className="profile-pic-container">
                        <img src={`../uploads/images/${data.picture}`} className="profile-pic" alt='pic' />
                    </div>
                    <div className="user-info">
                        <h3 className="user-name">{data.fullname}</h3>
                        <p className="user-craft text-secondary"> {data.craftname}</p>

                    </div>
                    <NavLink className="btn" to={`/dash/${data.id}`}><FaPlusCircle size={25} /></NavLink>
                </div >
                
          
      </>
      
  )
}

export default UserComponents