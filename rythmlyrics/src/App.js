import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './components/Admin/Dashboard'
import Unknown from './components/Unknown'
import Home from './components/Home'
import Success from './components/Home/Success'
import Verification from './components/Home/Verification'
import 'react-toastify/dist/ReactToastify.css';
import Congrats from './components/Home/Congrats'
import Recovery from './components/Recovery/Recovery'
import Admin from './components/Admin/Admin'
import Edit from './components/Admin/content/Edit'
import Vote from './components/Home/Vote'
import Login from './components/Home/Login'
import Registration from './components/Home/Registration'
import Forgot from './components/Recovery/Forgot'
import Upload from './components/Admin/Upload'
import Uploaded from './components/Admin/Uploaded'
import AdminLogin from './components/Admin/AdminLogin'
import Content from './components/Home/Content'
import Agree from './components/Home/Agree'
import Userpanel from './components/Admin/Userpanel'
import Error from './components/Home/Error'

const App = () => {
  return (
    <>
   
      <BrowserRouter>
        <ScrollToTop>
      <Routes>
            <Route index element={<Home />} exact />
            <Route path='rythmlyrics.participant1153680/:id' element={<Vote/>} exact />
          <Route path = "*"element={<Unknown />} exact />
            <Route path=":id/userrhythmlyric.contestant.345009.profile" element={<Home />} exact />
             
            <Route path="signin" element={<Login/> } exact /> 
            <Route path="signup" element={<Registration />} exact /> 
            <Route path="forgot" element={<Forgot />} exact /> 
            <Route path="uploaded" element={<Uploaded />} exact /> 
            <Route path="confirmation" element={<Success />} exact />
            <Route path="user.password.reset/:id" element={<Recovery />} exact />
            {/* <Route path="super" element={<AdminLogin />} exact /> */}
            {/* <Route path="vote" element={<Vote />} exact /> */}
            <Route path="dash/:id" element={<Edit />} exact />
            <Route path="agree" element ={<Agree/>} exact />
            <Route path="contestants.email.verification/:id" element={<Verification />} exact />
            <Route path="failed" element={<Error/>} exact />
            
            
          </Routes>
          </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App