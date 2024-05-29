import React from 'react'

const Post = () => {
  return (
    <div className='hover:bg-neutral-800 w-full border-b-2 p-5 border-white flex items-start justify-start'>
        <img className='rounded w-[174px] h-[107px] m-2' src="/dummy.jpg" alt="post" />
        <h1 className='text-xl font-bold font-[Oswald] lg:text-3xl text-white'>Heading or a Catchy Tagline</h1>
    </div>
  )
}

export default Post