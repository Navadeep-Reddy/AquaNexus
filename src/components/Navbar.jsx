import React from 'react'
import { useState, useEffect } from 'react'
import Logo1 from '/Logo/ColorLogoTrans.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect( () => {
    window.addEventListener('scroll', () => {
        (window.scrollY > 100)? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <div className={`w-full fixed top-0 ${sticky? "bg-PrimaryBlue" : "bg-inherit"} duration-300 z-10`}>
        <div className={`xl:w-[80%] md:w-[90%] sm:w-[100%] mx-auto flex justify-between items-center`}>
        <div className='max-h-full'>
            <img src={Logo1} className='xl:h-[4rem] h-[3rem]'></img>
        </div>

        <ul className='font-medium xl:text-2xl lg:text-2xl text-xl text-AccentCoral flex cursor-pointer'>
            <li className='mx-5'><Link to="Top" smooth={true} duration={500} offset={0}>Home</Link></li>
            <li className='mx-5'><Link to="General-Chart" smooth={true} duration={500} offset={-350}>Visualize</Link></li>
            <li className='mx-5'><Link to="ML" smooth={true} duration={500} offset={-180}>Forecast</ Link></li>
            <li className='mx-5'><Link to="Contact" smooth={true} duration={500} offset={0}>Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;
