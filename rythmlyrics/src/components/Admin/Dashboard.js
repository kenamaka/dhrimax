import React, { useState } from 'react'
import { FaAccusoft, FaAddressCard, FaEdit,FaUserCircle, FaUserFriends, FaUserSecret, FaUserTie, FaUserTimes, FaVoteYea } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Dash from './Dash'
import './Dashboard.css'
import Partispants from './Partispants'
import UsersForm from './UsersForm'
import axios from '../../Api/axios'
const Dashboard = () => {
  const [users, setUsers] = useState(true)
  const [admins, setAdmins] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [create, setCreate] = useState(false)
  const navigate = useNavigate()


  const handleLogout =  () => {
    localStorage.clear()

    window.location.reload()
  };
  

  const handleUser = () => {
    setUsers(true)
    setAdmins(false)
    setDashboard(false)
    setCreate(false)
  }
  const handleAdmin = () => {
    setUsers(false)
    setAdmins(true)
    setDashboard(false)
    setCreate(false)
  }
  const handleDashboard = () => {
    setUsers(false)
    setAdmins(false)
    setDashboard(true)
    setCreate(false)
  }
  const handleCreate = () => {
    setUsers(false)
    setAdmins(false)
    setDashboard(false)
    setCreate(true)
  }
  

  if (dashboard) {
    return (
    <Admin/>
  )
}

  return (
    <>
<div>
    <div class="nav center ">
      <ul>
      <li><NavLink to="#" className="nlink">Home</NavLink></li>
      <li><NavLink to="#" className="nlink" onClick={handleDashboard}>Dashboard</NavLink></li>
      <li><NavLink to="#" className="nlink">Stage 1</NavLink></li>
      <li><NavLink to="#" className="nlink">Stage 2</NavLink></li>
       
      </ul>
    </div>
    </div>
    <div class="sidebar ">
      
      <div className='items bg-warning'>
        <FaUserFriends size={30} />
            <NavLink to="#" className="nav_item text-dark " onClick={handleUser}> Users</NavLink>
          </div>
          <div className='items bg-info'>
        <FaUserSecret size={30}/>
            <NavLink to="#" className="nav_item text-dark" onClick={handleAdmin}> Admins</NavLink>
          </div>
          <div className='items bg-success'>
        <FaAddressCard size={30}/>
            <NavLink to="#" className="nav_item text-dark" onClick={handleDashboard}> Dash</NavLink>
        </div>
        <div className='items bgblue'>
        <FaEdit size={30} className ='text-secondary'/>
            <NavLink to="#" className="nav_item text-secondary" onClick={handleCreate}> Create</NavLink>
        </div>
        <div className='items bg-primary'>
        <FaVoteYea size={30}/>
            <span  className="nav_item text-dark"> 309877</span>
        </div>
        <div className='items bg-danger'>
        <FaUserTimes size={30}/>
            <NavLink to="#" className="nav_item text-dark" onClick={handleLogout}> Logout</NavLink>
          </div>

    </div>
      <div class="main-content">
        <div className='pt-5'> 
          <h2 className='blue'>Welcome Admin
          <hr/>


          </h2>

        </div>

        {create && <UsersForm />}
        {users && <Partispants />}
        {admins && <Dash />}
    </div>
    
    </>
  )
}

export default Dashboard