import React from 'react'
import { useState } from 'react'
import {  FaAngleDown, FaArrowDown, FaPlusCircle, FaRegFileImage, FaTimes, FaVideo } from 'react-icons/fa'
// import './Upload.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles, ColorRing } from "react-loader-spinner";
import axios from '../../Api/axios';


const Max_size = 2 * 1034 * 1024;
const UploadPicture = ({token,setFormtwo}) => {
 
    const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
// console.log(token)

// console.log(file)

    const handleFileChange = (event) => {
      setFile(event.target.files[0])
      const file = event.target.files[0];
      setSelectedFile(file.name);
    };

    const handleUpload = (e) => {
      e.preventDefault()
      setLoading(true)

      if (file && file.size > Max_size) {
        
        toast.error("Error: File Size must not be more than 5MB", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        setLoading(false)
        return false;
      }
      const formData = new FormData();

      formData.append("file", file);
      formData.append("token", token);
      
      axios.put('/api/picture',
        formData
      ).then(response => {
        if (response.data.message) {
          toast.success("Profile pics uploaded successfully", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        setLoading(false)
        setFormtwo()
        }
        else {
          throw new Error(response.data.error)
        }
          
      }).catch(error => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        setLoading(false)
      })
  
    }
    return (
      <>
         <h2 className="main-heading text-dark">Select Profile Picture</h2>
                <p className="white text-center p-3">Your Profile pictures should not be more than <span className='text-danger'>2M</span>,
          and should clearly show your face.</p>
          <div className="App">
                <div className="form-container pics text-center">

<form onSubmit={handleUpload}>
                      <div className="row">
                        <div className="col-md-12 center">
                          <div className="btn-container">
                            <h1 className="imgupload"><FaRegFileImage /></h1>
    
                            {selectedFile ? <p className='blue'> {selectedFile}</p> : <p>Only pics allowed! (jpg,jpeg,bmp,png)</p>}
                                                
                            <button type="button" className="btn btn-primary btn-lg">Browse Photo<FaAngleDown /> </button>
                            <input type="file" className="fileup" accept='image/*' onInput={handleFileChange} required />
                          </div>
                        </div>
              </div>
              <ToastContainer/>
                      <div className="row">
            <div className="col-md-12">
            {loading ? (
                          <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={[
                              "#b8c480",
                              "#ffc107",
                              "#F4442E",
                              "#082465",
                              "#429EA6",
                            ]}
                          />
                        ) : (
                          <button type='submit' className="btn btn-outline-dark btn_on-hover" style={{ fontWeight: 700 }}>
                          Submit <FaPlusCircle />
                        </button>
                        )}
                        </div>
                      </div>
            </form>
          </div>
          </div>

                   
    </>
  )
}

export default UploadPicture