import React from 'react'

const Highlight = () => {
  return (
    <div className='w-fit h-fit mt-40'>
      <div className='w-56 h-60 md:w-60 md:h-72 xl:w-80 md: xl:h-96 bg-purple-400 rounded-md'>
        <img className='w-full h-full rounded' src="/dummy.jpg" alt="highlight" />
      </div>
      <div className='w-56 md:w-60 xl:w-80 bg-white p-4 rounded-md -mt-4'>
        <h1 className='text-3xl font-[Newsreader] text-black'>Heading or a Cathcy TagLine</h1>
      </div>
    </div>
  )
}

export default Highlight