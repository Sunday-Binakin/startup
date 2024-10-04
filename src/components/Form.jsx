import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="get-in-touch-form-container flex flex-col justify-center m-auto bg-red-700 h-[400px] ">
                <h1 className='mt-4'>
                    Get in Touch
                </h1>
                <p>
                    Tour function information without cross action media value quickly maximize timely deliverables.
                </p>
                <div className="form-container flex flex-col  ">
                    <div className='flex flex-row gap-2'>
                    <input type="text" placeholder='Your Name' className='mt-4 mb-4 w-52'/>
                    <input type="email" placeholder='Email' className='mt-4 mb-4 w-52' />
                    </div>
                    <input type="text" placeholder='Subject' className='mt-4 mb-4 w-52 h-8 rounded'/>
                    <input type="text" placeholder='Message' className='mt-4 mb-4 w-80 h-24' />
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Form