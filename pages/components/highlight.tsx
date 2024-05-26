import React from 'react'

const Highlight = () => {
  return (
    <div className='w-fit h-fit mt-40 border-b-2'>
      <div className='w-56 h-60 md:w-60 md:h-72 xl:w-80 md: xl:h-96 bg-purple-400 p-6 rounded-t-xl'>
        <img className='w-full h-full rounded-xl' src="/dummy.jpg" alt="highlight" />
      </div>
      <div className='w-56 md:w-60 xl:w-80 bg-yellow-500 p-4'>
        <h1 className='text-3xl font-[Newsreader] text-white'>Heading or a Cathcy TagLine</h1>
      </div>
    </div>
  )
}

export default Highlight