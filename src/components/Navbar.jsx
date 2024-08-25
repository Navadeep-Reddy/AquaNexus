import React from 'react'
import Logo from '/Logo/CyanLogo.png'
import Logo1 from '/Logo/ColorLogoTrans.png'
const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto flex justify-between items-center'>
      <div className='max-h-full'>
        <img src={Logo1} className='h-[4rem] '></img>
      </div>

      <ul>
        <li className='font-medium text-2xl text-AccentCoral'>Home</li>
      </ul>
    </div>
  )
}

export default Navbar;
