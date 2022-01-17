import React, { useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import './Contact.css'
import Fade from 'react-reveal'
import Footer from './Footer'
const Contact = () => {
  useEffect(() => {
   window.scrollTo(0,0)
  }, [])


    return (
      <>
      <section>

  <div class="listing-hero">
    <div class="hero-heading">
        
    <Fade bottom>
              <h1 className="responsive-headline">Contact Us</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Got any Questions? Feel free to ask or visit our About-Us page </h3>
            </Fade>      
      </div>
  </div>

<div class="container-contact">
    <div class="wrap-contact">

      <form name="contact" class="contact-form validate-form" method="post" action= "contact-form-handler.php">

      <Fade left>
      <div class="wrap-input validate-input" data-validate="Please enter your name">
          <input class="input" type="text" required="true" name="name" placeholder="Full Name"/>
        </div>
      </Fade>

        <Fade left>
        <div class="wrap-input validate-input" data-validate="Please enter your contact number">
          <input class="input" type="number" required="true" name="contactNo" placeholder="Contact Number"/>
        </div>
        </Fade>

        <Fade left>
        <div class="wrap-input validate-input" data-validate = "Please enter your email">
          <input class="input" type="text" required="true" name="email" placeholder="E-mail"/>
        </div>
        </Fade>

        <Fade left>
        <div class="wrap-input validate-input" data-validate = "Please enter your message">
          <textarea class="input" type="text" required="true" name="message" placeholder="Your Message"></textarea>
        </div>
        </Fade>

        
        <div class="container-contact-form-btn">
          <button type="submit" class="btn btn-info">
            <Fade left>Send</Fade>
          </button>
        </div>
       
      </form>

    </div>
  </div>

</section>
<Footer/>
      </>
    )
}


export default Contact