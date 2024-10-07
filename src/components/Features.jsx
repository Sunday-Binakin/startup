import React from 'react'
import aboutImage from '../assets/images/about.png'

const Features = () => {
  return (
    <div>
    <div className="empowering-container flex flex-row items-center ">
        {/* <div className="empowering-image  bg-red-400">{aboutImage}</div> */}
        <div className="empowering-image h-[400p%] w-[100%] bg-red-400">{aboutImage}</div>
        <div className="empowering-text h-[400px] w-[100%] text-grey">
            <h2 className='mt-4'>About Us</h2>
            <h1 className='mt-4'>Empowering individuals</h1>
            <p className='mt-4 '>Efficiently unleash cross-media tour function information without cross action media value. Quickly maximize timely deliverables for real-time schemas.

“Function information without cross action media value.</p>
<button className='mt-4 bg-purple-500 w-28 h-12 rounded-[24px] ' >About Us</button>
        </div>
    </div>
    </div>
  )
}

export default Features