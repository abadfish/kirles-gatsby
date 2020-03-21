import React from 'react'
import { Zoom } from 'react-slideshow-image';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import stars from '../assets/particle_video.mp4'
import './index.css'

const Captions = ["hello world"]

const zoomInProperties = {
  duration: 2000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  scale: 1.4,
  arrows: false
}

const images =
[
  { img: "KirLes/IMG_9152.jpg", effect: "art:zorro", height: "600", width: "600", crop: "lfill"},
  { img: "KirLes/IMG_9191.jpg", effect: "art:zorro", height: "500", width: "500", crop: "fill"},
  { img: "KirLes/IMG_9767.jpg", effect: "sepia", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9753.jpg", effect: "grayscale", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9517.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0336.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_5641.jpg", effect: "cartoonify", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0414.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  // Tahoe
  { img: "KirLes/IMG_9969.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9939.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9971.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9982.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9959.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0244.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0106.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0115.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0239.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},

  { img: "KirLes/IMG_9831.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9703.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9944.jpg", effect: "art:zorro", height: "300", width: "300", crop: "fill"},
  { img: "KirLes/IMG_9639.jpg", effect: "grayscale", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9529.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9458.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9687.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  // Yosemite
  { img: "KirLes/IMG_2848.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9474.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9494.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9442.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9324.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9254.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9249.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2805.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2835.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2941.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2800.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9222.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2656.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},

  { img: "KirLes/IMG_3712.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_9297.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3466.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3734.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3515.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3453.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3443.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3426.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3302.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3266.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3260.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1370.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1745.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2020.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1998.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2008.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2070.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2067.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},

  { img: "KirLes/IMG_0491.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3120.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3174.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3178.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3151.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_3169.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  // home projects
  { img: "KirLes/IMG_1912.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1521.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1197.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1108.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1463.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1571.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1602.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_2506.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_1070.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0252.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0804.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0782.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0769.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0575.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0489.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0324.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0325.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0325.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0288.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0109.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/IMG_0092.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},
  { img: "KirLes/20200112_205756.jpg", effect: "art:zorro", height: "600", width: "600", crop: "fill"},

]

const slideshow = () => {

  return (
    <div className='main-container'>
      <div className='vid-bg-cover'>
        <video loop muted autoPlay poster="" className="fullscreen-bg__video">
          <source src={stars} type="video/mp4"/>
          <track kind="captions" srcLang="en" src={Captions} />
        </video>
      </div>
      <div className='image-div'>
      <CloudinaryContext cloudName='abadfish'>
        <div className="slide-container">
          <Zoom {...zoomInProperties}>
            {
              images.map((each, index) => <Image
                    publicId={each.img}
                    fetch-format="auto"
                    quality="auto"
                    style={{width: '100%', background: '#000'}}
                >
                  <Transformation height={each.height} width={each.width} crop={each.crop} effect={each.effect} radius="20" gravity="auto" />
                </Image>
              )
            }
          </Zoom>
        </div>
        </CloudinaryContext>
      </div>
    </div>
  )
}

export default slideshow
