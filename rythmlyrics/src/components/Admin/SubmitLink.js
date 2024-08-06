import React from "react";
import { useState } from "react";
import {
  FaAngleDown,
  FaFileUpload,
  FaLongArrowAltDown,
  FaPlusCircle,
  FaVideo,
} from "react-icons/fa";
import "./Upload.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../Api/axios";
import { useNavigate } from "react-router-dom";
import { Circles, ColorRing } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Uploadtwo = ({id,token,stagename,email,handleMain}) => {
  const [socialLink, setSocialLink] = useState("")
  const [verify, setVerify] = useState("")
  const navigate = useNavigate()
  // let buyLink = `https://rhythmandlyricsproject.com/rythmlyrics.participant1153680/${token} `
  let buyLink = `http://localhost:3000/rythmlyrics.participant1153680/${token} `;


// console.log(stagename,email)


const validateEmail = (social) => {
  const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/(?:p\/[a-zA-Z0-9_-]+|reel\/[a-zA-Z0-9_-]+)\/?(?:\?[^\/]*)?$/;

  if (!instagramRegex.test(social)) {
    setVerify("Enter correct link format. Link must be an Instagram link");
    return false;
  }
  
  setVerify("");
  return true;
};

const handleChange = (e) =>{
  e.preventDefault()
  setSocialLink(e.target.value);

  validateEmail(e.target.value)
  if(e.target.value.trim() === ''){
    setVerify("")
  }
}
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(socialLink)
    console.log(verify)

    axios
    .put("/api/sociallink", { id, socialLink,buyLink,stagename,email })

    .then((response) => {
      if (response.data.message) {
        toast.success('Social Link Uploaded Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        },
        );
    window.location.reload()

      }
      else  {
        throw new Error(response.data.error)
      }
      
      }).catch((error) =>{
        toast.error(error.message, {
          position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
        })
      })
  };

  return (
    <>
      <div className="App">
        <div className="pics">
          <div className="p-4">
         
              <>
                <h2 className="main-heading text-blue">
                  Upload the Link to your video
                </h2>
                <p className="white text-center pr-3 pl-3 ">
                  You are expected to enter the link to the video uploaded on your page, using the stated guidlines.
                  <span className="dark font-weight-bolder">Once your link is submited, your BUYPOINT link would be ready.</span> You can now copy and start sharing and buying.
                </p>
              </>
<div>
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <input type="text" placeholder="Submit Link" value={socialLink} onChange={handleChange} className="form-control p-2" required/>
  </div>
  <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={4}
      >

  <div className="text-danger  " ><p className="text-center">{verify}</p></div>
  </AnimationOnScroll>

  <br/>
  <button
                className="btn call_to-btn btn-primary"
                type="submit"
              >
                Submit <FaLongArrowAltDown />
              </button>

</form>
</div>
<ToastContainer/>           
           
          </div>
         
        </div>
        <br/>
      </div>
    </>
  );
};

export default Uploadtwo;
