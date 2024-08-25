import React from 'react'
import Logo from '/Logo/CyanLogo.png'
const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto flex justify-between items-center'>
      <div className='max-h-full'>
        <img src={Logo} className='h-[4rem] '></img>
      </div>

      <ul>
        <li>yo</li>
      </ul>
    </div>
  )
}

export default Navbar;
