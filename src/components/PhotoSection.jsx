import React from 'react'
// import img1 from '../ovelia_imgs/img_1.jpg'

const PhotoSection = () => {
  return (
    <section className="pic-section">
      <p>Photos</p>
      <div className="pic-gallery">
        <img src={require('../ovelia_imgs/img_2.jpg')} alt="rest pic" />
        <img src={require('../ovelia_imgs/img_3.jpg')} alt="rest pic" />
        <img src={require('../ovelia_imgs/img_4.jpg')} alt="rest pic" />
        <img src={require('../ovelia_imgs/img_8.jpg')} alt="rest pic" />
        <img src={require('../ovelia_imgs/img_10.jpg')} alt="rest pic" />
        <img src={require('../ovelia_imgs/img_14.jpg')} alt="rest pic" />
      </div>
    </section>
  )
}

export default PhotoSection