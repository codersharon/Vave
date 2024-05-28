import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-start w-full p-4 bg-black text-white'>
        <img src="/tech-vave-dark-1-1@2x.png" alt="logo" className='w-28 hidden md:block xl:w-36' />
        <div className='grid grid-cols-3 gap-6 mx-5'>
            <li className="font-Inter list-none">Tech</li>
            <li className="font-Inter list-none">Business</li>
            <li className="font-Inter list-none">Science</li>
            <li className="font-Inter list-none">Join-Us</li>
            <li className="font-Inter list-none">News-Letter</li>
            <li className="font-Inter list-none">Archives</li>
        </div>
    </div>
  )
}

export default Footer