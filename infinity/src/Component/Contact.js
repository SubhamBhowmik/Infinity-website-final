import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import './Contact.css'
import Fade from 'react-reveal'
import Footer from './Footer'
import { Redirect } from "react-router-dom";
const Contact = () => {
  const [contactdata, setContactdata] = useState({
 
    name: "", contactNo: "", email: "", message: ""
  });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [toggle, settoggle] = useState(false);

  let name, value;
  const handleinputs = (e) => {

    name = e.target.name;
    value = e.target.value;

    setContactdata({ ...contactdata, [name]: value });
    console.log(contactdata);
    e.preventDefault()
  }

  const submitform = () => {
    alert("Thank you for showing interest in Infinity Foundation. We will get back to you shortly.");
   setContactdata({});
   settoggle(true);
  }
  if(toggle){
    return <Redirect to="/About"/>
  }


  return (
    <>
      <section>

        <div class="listing-hero">
          <div class="hero-heading">
            <div class="middletext">
              <Fade bottom>

                <h1 className="responsive-headline">Contact Us</h1><br />
              </Fade>
              <Fade bottom duration={1200}>
                <h5>Got any Questions?
                  Feel free to ask through the Contact-Us Form or Chat with us directly through Whatsapp.</h5>
              </Fade>
            </div>
          </div>
        </div>

        <div class="container-contact">
          <div class="wrap-contact">

            <form id="myForm" name="contact" class="contact-form validate-form" method="post" action="contact-form-handler.php">
            
              <Fade left>
                <div class="wrap-input validate-input" data-validate="Please enter your name">
                  <input class="input" type="text" required="true" name="name"
                    value={contactdata.name} onChange={handleinputs} placeholder="Full Name" />
                </div>
              </Fade>

              <Fade left>
                <div class="wrap-input validate-input" data-validate="Please enter your contact number">
                  <input class="input" type="text" name="contactNo"
                    value={contactdata.contactNo} onChange={handleinputs} required="true" placeholder="Contact Number" />
                </div>
              </Fade>

              <Fade left>
                <div class="wrap-input validate-input" data-validate="Please enter your email">
                  <input class="input" type="text" name="email"
                    onChange={handleinputs} value={contactdata.email} required="true" placeholder="E-mail" />
                </div>
              </Fade>

              <Fade left>
                <div class="wrap-input validate-input" data-validate="Please enter your message">
                  <textarea class="input" type="text" onChange={handleinputs} value={contactdata.message} required="true" name="message" placeholder="Your Message"></textarea>
                </div>

              </Fade>


              <div class="container-contact-form-btn">
                <button  type="submit" class="btn btn-info" onClick={submitform}>
                  <Fade left>Send</Fade>
                </button>
              </div>

            </form>

          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}


export default Contact