import React from 'react'

const Overlay = () => {
  return (
    <div className='hero'>
        {/* <div className="bg-image">
            <div className="overlay flex flex-col">
            
                <div className="hero-text mt-44 ml-60 mr-60 text-[40px] font-semibold">
                <p className='text-[40px] mt-'>&quot; Tempora quae cumque ut earum eos explicabo eius placeat animi quos at blanditiis est, sapiente autem cum, eaque corporis sit, non error.&quot; - Grevor</p>
                </div>
            </div>
        </div> */}
        <div className="hero-overlay">
           <div className="overlay-prop  text-[50px] font-semibold  ml-[320px] mr-[450px] text-white">
           <p className='mt-[200px]'>Startup you can build a website online using the Bootstrap builder.</p>
           <button className='bg-[#2596be] w-[420px] h-24 mt-12 rounded-[40px]'>Visit our Works</button>
           </div>
        </div>
    </div>
  )
}

export default Overlay