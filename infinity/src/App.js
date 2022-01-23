import React, { useLayoutEffect } from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Component/AboutUs';
import TalentForum from './Component/TalentForum'
import Home from './Component/Home'
import Contact from './Component/Contact';
import Navigationbar from './Component/Navigationbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DonateUs from './Component/DonateUs';
import Blogs from './Component/Blog/Blogs';
import Post from './Component/Blog/Post';
const App = () => {
  return (
    <>
       <Router>
        <Navigationbar/>
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={AboutUs} />
          <Route path='/TalentForum' component={TalentForum} />
          <Route path='/contact' component={Contact} />
          <Route path='/DonateUs' exact component={DonateUs} />
          <Route path='/Blogs' exact component={Blogs} />
          <Route path='/Post' exact component={Post} />
        </Switch>
      </Router>

      <FloatingWhatsApp phoneNumber={"1234567890"} accountName={"Infinity Foundation"} />
    </>
  )
}

export default App
