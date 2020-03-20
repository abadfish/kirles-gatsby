import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css'
import Welcome from './Welcome'
import Slideshow from './Slideshow'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Welcome }/>
        <Route exact path='/kirles' component={ Slideshow }/>
      </Switch>
    </Router>
  )
}

export default App

// {
//   images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
// }


// https://975518935329372:nkikNimiBTH5kp8LI2w58hxR_c8@api.cloudinary.com/v1_1/abadfish/resources/image
  // useEffect(() => {
  //   fetch(`https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`)
  //     .then(response => response.text())
  //     .then(text => (text ? JSON.parse(text).resources : []))
  //     .then(text => console.log(text))
  // }, [])


// <Transformation overlay="text:arial_20:This is my picture" gravity="center" y="20" />
