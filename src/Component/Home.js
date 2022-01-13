import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Image, Carousel, Button } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import AboutUS from './AboutUs'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <>
      
   
    <Header/>
    <Footer/>
    
    </>
    )
}

export default Home
