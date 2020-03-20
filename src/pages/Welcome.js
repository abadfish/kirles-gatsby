import React from 'react'
import { NavLink } from 'react-router-dom'
import stars from '../assets/particle_video.mp4'
import './index.css'


const Captions = ["hello world"]

const Welcome = () => {

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
        <NavLink to='/kirles' className='enter'>Enter</NavLink>
      </div>
    </div>
  )
}

export default Welcome
