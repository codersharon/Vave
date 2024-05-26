import React from 'react'
import Recents from './recents'
import Tech from './tech'
import Business from './business'
import Science from './science'

const Content = () => {
  return (
    <div className='w-full'>
      <Recents />
      <Tech />
      <Business />
      <Science />
    </div>
  )
}

export default Content