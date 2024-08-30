import React from 'react'

const Title = ({Title, Subtitle}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-10'>
      <h1 className='text-5xl font-bold text-PrimaryBlue'>{Title}</h1>
      <p className='text-TextCharcoal font-medium'>{Subtitle}</p>
    </div>
  )
}

export default Title
