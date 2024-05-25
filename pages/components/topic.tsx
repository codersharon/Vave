import React from 'react'

const Topic = () => {
  return (
    <div className='w-full md:w-[236px] xl:w-[368px] -mt-4 -z-10 md:mt-4 mx-2 mb-10 md:mb-0  p-1'>
        <img className='rounded-md' src="/dummy.jpg" alt="highlight" />
        <div className='font-semibold font-[Newsreader] text-4xl rounded-b-md -mt-2 p-2 text-white bg-gradient-to-r from-[#FF5151] to-[#5CA7FF]'>
            <h1>Heading or a Catchy Tagline</h1>
        </div>
    </div>
  )
}

export default Topic