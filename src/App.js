import React, { useLayoutEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Component/AboutUs';
import TalentForum from './Component/TalentForum'
import Home from './Component/Home'
import Contact from './Component/Contact';
import Navigationbar from './Component/Navigationbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer';
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
         
        </Switch>
      </Router>
    </>
  )
}

export default App
