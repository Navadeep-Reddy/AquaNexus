import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '/Logo/CyanLogo.png'
import Logo1 from '/Logo/ColorLogoTrans.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect( () => {
    window.addEventListener('scroll', () => {
        (window.scrollY > 100)? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <div className={`w-full fixed top-0 ${sticky? "bg-PrimaryBlue" : "bg-inherit"} duration-200`}>
        <div className={`xl:w-[80%] md:w-[90%] sm:w-[100%] mx-auto flex justify-between items-center`}>
        <div className='max-h-full'>
            <img src={Logo1} className='xl:h-[4rem] h-[3rem]'></img>
        </div>

        <ul className='font-medium xl:text-2xl lg:text-2xl text-xl text-AccentCoral flex '>
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
