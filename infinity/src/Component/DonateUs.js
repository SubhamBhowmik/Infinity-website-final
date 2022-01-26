import React from 'react';
import { useEffect } from 'react';
import Fade from "react-reveal"
import "./donate.css"
import Footer from  "./Footer"
const DonateUs = () => {
    useEffect(() => {
        window.scrollTo(0,0);  
        
        }, [])
  return (
    <>
     <div className="main">
       <div className="container-">
           <div className="main-card">
           <Fade left duration={1200}>
           <img src="./assets/img/QRCode.jpg" alt="" />
           </Fade>
            
             <div className="typo">
             <Fade right >
             <h5>Name:-</h5>
             <h6>INFINITY FOUNDATION</h6>
         
             <h5>Account No:-</h5>
             <h6>60402614940</h6>
            
           
              <h5>IFSC CODE:-</h5>
              <h6>MAHB0000041</h6>
              <h5>Bank name:-</h5>
              <h6>Bank of Maharashtra</h6>
              </Fade>
             </div>
           
           </div>
       </div>
    
     </div>
     <Footer/>
    </>
  )
};

export default DonateUs;
