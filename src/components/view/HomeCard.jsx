import React from 'react'
import mainImage from '../../assets/Banner.jpg';

const HomeCard = () => {
  return (
    <div className='home-card'>
      <div className="home-card-box">
        <div className="home-card-image">
            <img src={mainImage} alt="logo" />
        </div>
        <div className="home-card-content">
            <h6>Location Name</h6>
            <p>State | Price </p>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
