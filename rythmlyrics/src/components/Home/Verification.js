import axios from "../../Api/axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Circles, ColorRing } from "react-loader-spinner";
import Congrats from "./Congrats";
import Error from "./Error";

const Verification = () => {
  const [cancel, setCancel] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(true);
  const location = useLocation();
  const token = location.pathname.split("/")[2];

  const handleVerification = () => {};


  useEffect(() => {
    const res = axios
      .get(`/api/verify/${token}`)
      .then((response) => {
        if (response.data.error) {
          setCancel(response.data.error);
        } else {
          setMessage(response.data.message);
        }
      });
  }, []);

if (message){
    return (
        <Congrats message={message}/>
    )
  }
  if (cancel) {
    return (
      <Error cancel={cancel} />
      
    )
  }
  return (
    <>
      <section className="site-section layout_padding">
        <div className="container">
          <div class="row justify-content-center align-center">
            <div className="col-lg-6 col-md-12 "><br/><br/>
                <div className="card-body text-center pt-5 ">
                {spinner ? 
                    <ColorRing
                      visible={true}
                      height="120"
                      width="120"
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
                   : 
                 ""
                }
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verification;
