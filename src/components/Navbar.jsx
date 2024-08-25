import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '/Logo/CyanLogo.png'
import Logo1 from '/Logo/ColorLogoTrans.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect( () => {
    window.addEventListener('scroll', () => {
        (window.scroll > 100)? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <div className='w-full fixed top-0'>
        <div className={`w-[80%] mx-auto flex justify-between items-center ${sticky? "bg-PrimaryBlue" : "bg-inherit"} `}>
        <div className='max-h-full'>
            <img src={Logo1} className='h-[4rem] '></img>
        </div>

        <ul className='font-medium text-2xl text-AccentCoral flex '>
            <li className='mx-5'>Home</li>
            <li className='mx-5'>Search</li>
            <li className='mx-5'>Visualize</li>
            <li className='mx-5'>Upload</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;
