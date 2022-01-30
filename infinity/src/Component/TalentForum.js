import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal'
import './talentforum.css'
import Footer from './Footer'
import { Redirect } from "react-router-dom";
const Forum = () => {
    const [studentdata, setStudentdata] = useState({
 
         name: "",
         contactNo: "",
         email: "",
         adharcard: "",
         gender: "",
         address: "",
         father: "",
         fatherContact: "",
         fatherOccupation: "",
         fatherIncome: "",
         mother: "",
         motherContact: "",
         motherOccupation: "",
         motherIncome: "",
         school: "",
         standard: "",
         medium: "",
         tnc: "",
         tnc2: ""
      });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [toggle, settoggle] = useState(false);

  let name, value;
  const handleinputs = (e) => {

    name = e.target.name;
    value = e.target.value;

    setStudentdata({ ...studentdata, [name]: value });
    console.log(studentdata);
    e.preventDefault()
  }

  const submitform = () => {
    alert("Thank you for registering to Infinity Talent Forum. Your information has been recorded successfully. We will get back to you shortly.");
   setStudentdata({});
   settoggle(true);
  }
  if(toggle){
    return <Redirect to="/About"/>
  }
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

        <div class="form-section">
            <div class='middletext'>
                <h1 class="form-head">REGISTRATION FORM</h1>
            </div>


            <div class="container-contact">
                <div class="wrap-contact">
                    <form name="contact" class="contact-form validate-form" method="post" action="contact-form-handler.php">
                    
                    <Fade left>
                    <div class='middletext'>
                    <h2 class="mb-4">Student's Details</h2>
                    </div>
                    </Fade>

                    <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your name">
                                <input class="input" type="text" required="true" name="name" 
                                value={studentdata.name} onChange={handleinputs} placeholder="Full Name" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your contact number">
                                <input class="input" type="number" required="true" name="contactNo" 
                                value={studentdata.contactNo} onChange={handleinputs} placeholder="Contact Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your email">
                                <input class="input" type="text" required="true" name="email" 
                                value={studentdata.email} onChange={handleinputs} placeholder="E-mail" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Adhar Card Number">
                                <input class="input" type="text" required="true" name="adharcard" 
                                value={studentdata.adharcard} onChange={handleinputs} placeholder="Adhar Card Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="form-check form-check-inline ">
                                <h4>Gender:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="male" 
                                value={studentdata.gender='male'} onChange={handleinputs} />
                                <label class="form-check-label" for="male">&nbsp;Male</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" 
                                value={studentdata.gender='female'} onChange={handleinputs} />
                                <label class="form-check-label" for="female">&nbsp;Female</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" 
                                value={studentdata.gender='other'} onChange={handleinputs} />
                                <label class="form-check-label" for="female">&nbsp;Other</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Gender" id="female" 
                                value={studentdata.gender='Not Mentioned'} onChange={handleinputs}/>
                                <label class="form-check-label" for="female">&nbsp;Do not want to mention</label>
                            </div>

                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input mt-5 " data-validate="Please enter your Address">
                                <input class="input mt-3" type="text" required="true" required="true" name="address" 
                                value={studentdata.address} onChange={handleinputs} placeholder="Address" />
                            </div>
                        </Fade>
                        <br /><br /><br /><br />

                    
                    <Fade left>
                    <div class='middletext'>
                    <h2 class="mb-4">Parent's Details</h2>
                    </div><br />
                    </Fade>

                    <Fade left><h4>Father's Details</h4></Fade><br />
                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your father's name">
                                <input class="input" type="text" required="true" name="father" 
                                value={studentdata.father} onChange={handleinputs} placeholder="Father's Name" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Father's Contact Number">
                                <input class="input" type="number" required="true" name="fatherContact"
                                value={studentdata.fatherContact} onChange={handleinputs} placeholder="Father's Contact Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Father's Occupation">
                                <input class="input" type="text" required="true" name="fatherOccupation" p
                                value={studentdata.fatherOccupation} onChange={handleinputs} placeholder="Father's Occupation" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Father's Annual Income">
                                <input class="input" type="text" required="true" name="fatherIncome"
                                value={studentdata.fatherIncome} onChange={handleinputs} placeholder="Father's Annual Income" />
                            </div>
                        </Fade><br />

                        <Fade left><h4>Mother's Details</h4></Fade><br />

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your mother's name">
                                <input class="input" type="text" required="true" name="mother"
                                value={studentdata.mother} onChange={handleinputs} placeholder="Mother's Name" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Mother's Contact Number">
                                <input class="input" type="number" required="true" name="motherContact"
                                value={studentdata.motherContact} onChange={handleinputs} placeholder="Mother's Contact Number" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Mother's Occupation">
                                <input class="input" type="text" required="true" name="mothrtOccupation"
                                value={studentdata.motherOccupation} onChange={handleinputs} placeholder="Mother's Occupation" />
                            </div>
                        </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your Mother's Annual Income">
                                <input class="input" type="text" required="true" name="motherIncome"
                                value={studentdata.motherIncome} onChange={handleinputs} placeholder="Mother's Annual Income" />
                            </div>
                        </Fade>
                        <br /><br /><br /><br />

                    <Fade left>
                    <div class='middletext'>
                    <h2 class="mb-4">School Details</h2>
                    </div>
                    </Fade>

                        <Fade left>
                            <div class="wrap-input validate-input" data-validate="Please enter your school name">
                                <input class="input" type="text" required="true" name="school"
                                value={studentdata.school} onChange={handleinputs} placeholder="School Name" />
                            </div>
                        </Fade>

                        <br />
 
                        <Fade left>
                            <div class="form-check form-check-inline ">
                                <h4>Standard:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="6" 
                                value={studentdata.standard="6"} onChange={handleinputs} />
                                <label class="form-check-label" for="6">&nbsp;VI</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="7" 
                                value={studentdata.standard="7"} onChange={handleinputs} />
                                <label class="form-check-label" for="7">&nbsp;VII</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="8" 
                                value={studentdata.standard="8"} onChange={handleinputs} />
                                <label class="form-check-label" for="8">&nbsp;VIII</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="9" 
                                value={studentdata.standard="9"} onChange={handleinputs} />
                                <label class="form-check-label" for="9">&nbsp;IX</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="10" 
                                value={studentdata.standard="10"} onChange={handleinputs} />
                                <label class="form-check-label" for="10">&nbsp;X</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="11" 
                                value={studentdata.standard="11"} onChange={handleinputs} />
                                <label class="form-check-label" for="11">&nbsp;XI</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Standard" id="12" 
                                value={studentdata.standard="12"} onChange={handleinputs} />
                                <label class="form-check-label" for="12">&nbsp;XII</label>
                            </div>

                        </Fade>

                        <br />

                        <Fade left>
                            <div class="form-check form-check-inline ">
                                <h4>Medium of Instruction:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Medium" id="english" 
                                value={studentdata.medium="english"} onChange={handleinputs} />
                                <label class="form-check-label" for="english">&nbsp;English</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Medium" id="marathi" 
                                value={studentdata.medium="marathi"} onChange={handleinputs} />
                                <label class="form-check-label" for="marathi">&nbsp;Marathi</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="Medium" id="semi" 
                                value={studentdata.medium="semi"} onChange={handleinputs} />
                                <label class="form-check-label" for="semi">&nbsp;Semi-English</label>
                            </div>
                        </Fade><br /><br /><br /><br />

                    <Fade left>
                    <div class='middletext'>
                    <h2 class="mb-4">Payment Details</h2>
                    </div> 

                    <p style={{ fontSize: '20px' }}>Scan the QR Code given below or use the mentioned UPI ID. You can also use the Bank Details given below to Transfer the amount directly.
                    Attach the Payment Receipt or Screenshot below. </p>
                    <h5 style={{ fontWeight: 'bold' }}>Amount : INR 450 Only</h5><br />
                    </Fade>
                    <div className="main-card ">
            <Fade left duration={1200}>
              <img src="./assets/img/QRCode.jpg" alt="" />
            </Fade>

            <div className='typo' >
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
                        <Fade left>
                        <br /><br /><br /><h5>
                        <div class="wrap-input validate-input" data-validate="Please enter your school name">
                        <label for="myfile">Select a file:</label>
                        <input type="file" id="myfile" name="myfile" />
                        </div></h5>
                        </Fade>

                        <Fade left>
                            <br /><br /><br />
                            <div class="wrap-input validate-input" data-validate="Please enter your school name">
                            <input type="checkbox" id="tnc" name="tnc" 
                            value={studentdata.tnc="True"} onChange={handleinputs} />
                            <label for="tnc"> I have read and understood the terms and conditions</label><br />
                            </div>
                            <div class="wrap-input validate-input" data-validate="Please enter your school name">
                            <input type="checkbox" id="tnc2" name="tnc2"
                            value={studentdata.tnc2="True"} onChange={handleinputs} />
                            <label for="tnc2"> I agree to the terms and conditions</label><br />
                            </div>
                        </Fade>

                        <div class="container-contact-form-btn ">
                            <button type="submit" class="btn btn-info" onClick={submitform}>
                                <Fade left>Submit</Fade>
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default Forum