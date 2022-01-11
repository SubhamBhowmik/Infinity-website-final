import React, { useState } from 'react'
import './Header.css'
import ParticlesBackground from './particlesBackground'
import Fade from 'react-reveal'
import Typed from 'react-typed'
import { Redirect } from 'react-router-dom'
const Header = () => {
const [state, setstate] = useState(false)
  if(state){
    return <Redirect to="/About"/>
  }
    return (
        <>
           
            <div className="header-wraper">
            <ParticlesBackground/>
                <div className="main-info d-flex flex-column ">
                    <Fade bottom duration={2000}><p className='display-5'> INFINITY FOUNDATION</p></Fade>

                    <h3>"Your limits are waiting for you to reach beyond infinity"</h3>
                    <Typed
                        className='typed-text display-3 text-white'
                        strings={['Web Development', 'Android Development', 'DATA SCIENCE', 'BUSINESS ANALYTICS', 'HUMAN RESOURCE']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />

                    <button type="button" class="btn btn-outline-dark btn-lg mt-3" data-mdb-ripple-color="dark"  onClick={()=>{setstate(true)}}>
                        About Us
                    </button>
                    
                </div>
                

            </div>
        </>
    )
}

export default Header
