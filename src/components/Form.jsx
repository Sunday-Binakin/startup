import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="get-in-touch-form-container flex flex-col justify-center bg-slate-100  h-[400px] ml-[40%] mr-[10%]">
            {/* <div className="get-in-touch-form-container flex flex-col justify-center bg-blue-700 h-[400px] ml-[40%] mr-[10%]"> */}
                <h1 className='mt-4 ml-14 text-[30px]'>
                    Get in Touch
                </h1>
                <p className='ml-14 text-[15px]'>
                    Tour function information without cross action media value quickly maximize timely deliverables.
                </p>
                <div className="form-container flex flex-col text-black ">
                    <div className='flex flex-row gap-2 ml-14'>
                    <input type="text" placeholder='Your Name' className='mt-4 mb-4 w-52  rounded-[15px] h-[40px] border-gray-700 '/>
                    <input type="email" placeholder='Email' className='mt-4 mb-4 w-52  rounded-[15px] h-[40px]' />
                    </div>
                    <input type="text" placeholder='Subject' className='mt-4 mb-4 w-52 h-8 rounded-[15px] ml-14  w-[420px] h-[40px]'/>
                    <input type="text" placeholder='Message' className='text-black mt-4 mb-4 w-80 h-24 ml-14 w-[420px]  rounded-[15px]' />
                    <button className='bg-[#615CFD] w-[500px] ml-14 h-10 text-white rounded-[15px] mt-2 mb-4'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Form