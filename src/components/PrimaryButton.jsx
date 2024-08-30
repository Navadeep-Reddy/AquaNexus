import React from 'react'

const PrimaryButton = ({children}) => {
  return (
      <button className='border-none w-[160px] h-[40px] rounded-md bg-AccentCoral font-semibold text-xl text-black shadow-md' type='submit'>{children}</button>
  )
}

export default PrimaryButton
