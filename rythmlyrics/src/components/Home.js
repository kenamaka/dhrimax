import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './Home/Main'
import NetworkStatusListener from './NetworkStatusListener'






const Home = () => {

  
  return (
    <>
      <NetworkStatusListener/>
      <Main />
      </>
  )
}

export default Home