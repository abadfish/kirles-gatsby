import React from 'react'
import { Link } from 'gatsby'
import stars from '../assets/particle_video.mp4'
import './index.css'
import slideshow from './slideshow'

const Captions = ["hello world"]


const App = () => {

  return (
    <div className='main-container'>
      <div className='vid-bg-cover'>
        <video loop muted autoPlay poster="" className="fullscreen-bg__video">
          <source src={stars} type="video/mp4"/>
          <track kind="captions" srcLang="en" src={Captions} />
        </video>
      </div>
      <div className='welcome-div'>
        <div className='happy'>Happy Anniversary Baby</div>
        <Link to='/slideshow' className='enter'>Enter</Link>
      </div>
    </div>

  )
}
export default App

// <Transformation overlay="text:arial_20:This is my picture" gravity="center" y="20" />
