import React, {useEffect, useState} from "react"
import { CSSTransition } from 'react-transition-group';
import sample from '../assets/particle_video.mp4'
import './index.css'
const Captions = ["hello world"]

const App = () => {
  const [showImage, setShowImage] = useState(false)
  console.log(showImage)

  useEffect(() => {
    setShowImage(true)
  }, [])
  return (
    <div className='main-container'>
      <div className='vid-bg-cover'>
        <video loop muted autoPlay poster="" className="fullscreen-bg__video">
          <source src={sample} type="video/mp4"/>
          <track kind="captions" srcLang="en" src={Captions} />
        </video>
      </div>
      <div className='image-div'>
        <CSSTransition
          in={showImage}
          timeout={9000}
          classNames="image-an"
        >
          <div className="image-1"></div>
        </CSSTransition>

      </div>
    </div>
  )
}

export default App
