import React,{useEffect} from 'react'
import Fade from 'react-reveal'
import './talentforum.css'
import  Footer from './Footer'
const Forum = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <div class="listing-hero">
                <div class="hero-heading ">
                    <div className='wrap'>
                        <Fade top>
                            <h1 className="responsive-headline">Infinity</h1>
                        </Fade>
                        <Fade top>
                            <h1 className=" p-3">Talent</h1>
                        </Fade>
                        <Fade top duration={5000}>
                            <h1 className="px-2">Forum</h1>
                        </Fade>
                    </div>



                    <Fade top duration={3500} >
                        <h3>"Your limits are waiting for you to reach beyond infinity" </h3>
                        <p>In ITF we are working to create a strong foundation of students. So they can compete in the future. By the help of ITF book & exam students will get platform to show their understanding of the concepts  & perform their knowledge. </p>
                    </Fade>
                </div>
            </div>
            <div class="container-contact">
                <div class="wrap-contact">

                    <form name="contact" class="contact-form validate-form" method="post" action="contact-form-handler.php">

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your name">
                                <input class="input" type="text" required="true" name="name" placeholder="Full Name" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your contact number">
                                <input class="input" type="number" required="true" name="contactNo" placeholder="Contact Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your email">
                                <input class="input" type="text" required="true" name="email" placeholder="E-mail" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Adhar Card Number">
                                <input class="input" type="text" required="true" name="adharcard" placeholder="Adhar Card Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="form-check form-check-inline ">
                                <input class="form-check-input" type="radio" name="Gender" id="male" value="male"/>
                                    <label class="form-check-label" for="male">Male</label>
                         
                                <input class="form-check-input" type="radio"  name="Gender" id="female" value="female"/>
                                    <label class="form-check-label" for="female">Female</label>
                            </div>

                        </Fade>

                        <Fade  left>
                            <div class="wrap-input validate-input mt-5 " data-validate="Please enter your Address">
                                <input class="input mt-3" type="text" required="true" required="true" name="address" placeholder="Address" />
                            </div>
                        </Fade>


                        <div class="container-contact-form-btn ">
                            <button type="submit" class="btn btn-info">
                                <Fade left>Submit</Fade>
                            </button>
                        </div>

                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Forum