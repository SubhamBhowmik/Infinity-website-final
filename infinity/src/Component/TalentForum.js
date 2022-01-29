import React, { useEffect } from 'react'
import Fade from 'react-reveal'
import './talentforum.css'
import Footer from './Footer'
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
                </div>
            </div>

            <div class="container py-5">
                <div class='middletext'>
                    <Fade right>
                        <h2 class="mb-4">Why subscribe to Infinity Talent Forum</h2>
                        <p class="text-body">Through Inifnity Talent Forum, we are working to create strong foundation among students so they can compete in the future. We provide books with the latest materials, doubt clearing sessions and regular exams to monitor progress. With the help of ITF books and Exams, every student gets a platform to deepen their understanding of concepts and perform their knowledge. Check out our prospectus and fill up teh Registration Form, and we will get in touch with you.</p>
                    </Fade>
                </div>

                <img class="pros-image" src="./assets/img/page1.png" />
                <img class="pros-image" src="./assets/img/page2.png" />
            </div>

            <div class='middletext'>
                <h2 class="mb-4">REGISTRATION FORM</h2>
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
                                Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="male" value="male" />
                                <label class="form-check-label" for="male">Male</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" value="female" />
                                <label class="form-check-label" for="female">Female</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" value="female" />
                                <label class="form-check-label" for="female">Other</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" value="female" />
                                <label class="form-check-label" for="female">Do not want to mention</label>
                            </div>

                        </Fade>

                        <Fade left>
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
            <Footer />
        </>
    )
}

export default Forum