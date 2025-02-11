import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {



  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span> </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-fullmd:max-w-[30 0px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-600' >Karasayeva 50/1 <br /> Bishkek</p>
          <p className='text-gray-600'>Phone: 996707909090 <br /> Email: HealthCare.gmail.com</p>
          <p className='flex flex-col justify-center items-start gap-6'>Careers at HealthCare</p>
          <p className='text-gray-600'>Learn more about our teams and job openings</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all durition-500'>Explore job</button>
        </div>
      </div>

    </div>
  )
}

export default Contact