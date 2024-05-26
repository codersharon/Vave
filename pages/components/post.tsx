import React from 'react'

const Post = () => {
  return (
    <div className='w-full mt-20 border-b-2 border-white pb-4 flex items-start justify-start'>
        <img className='rounded-lg w-[174px] h-[107px] m-2' src="/dummy.jpg" alt="post" />
        <h1 className='text-xl font-bold font-[Oswald] lg:text-3xl text-white'>Heading or a Catchy Tagline</h1>
    </div>
  )
}

export default Post