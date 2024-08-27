import React from 'react'

const SecondaryButton = ({children}) => {
  return (
      <button className='border-none w-[160px] h-[40px] rounded-md bg-PrimaryBlue font-semibold text-xl text-BackgroundSand shadow-md' type='submit'>{children}</button>
  )
}

export default SecondaryButton
