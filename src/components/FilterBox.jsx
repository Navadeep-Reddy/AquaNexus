import React, { useRef, useState } from 'react';
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const FilterBox = () => {
  const slider = useRef();
  const [X_Pos, setX_Pos] = useState(0); 

  const MoveRight = () => {
    setX_Pos(prev => prev - 180);
    slider.current.style.transform = `translateX(${X_Pos - 180}px)`;
  };

  const MoveLeft = () => {
    if (X_Pos === 0) return;
    setX_Pos(prev => prev + 180); 
    slider.current.style.transform = `translateX(${X_Pos + 180}px)`;
  };

  return (
    <div className='h-full relative  flex justify-center'>
      <div className='slider  h-1/2 py-10 overflow-hidden w-[750px]'>
        <ul className='flex w-[1000%]  h-full items-stretch duration-500 font-medium text-BackgroundSand' ref={slider}>
          <li className='w-[150px] p-[20px] bg-gradient-to-tr from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Indian Mackarel</h1>
          </li>
          <li className='w-[150px] p-[20px] bg-gradient-to-r from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Catla</h1>
          </li>
          <li className='w-[150px] p-[20px] bg-gradient-to-r from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Rohu</h1>
          </li>
          <li className='w-[150px] p-[20px] bg-gradient-to-r from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Catla</h1>
          </li>
          <li className='w-[150px] p-[20px] bg-gradient-to-r from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Hilsa</h1>
          </li>
          <li className='w-[150px] p-[20px] bg-gradient-to-r from-SecondaryGreen to-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl'>
            <h1 className='text-xl'>Catla</h1>
          </li>
        </ul>
      </div>
      <MdArrowForwardIos className='absolute top-[20%] right-[2%] transform text-[40px] text-TextCharcoal' onClick={MoveRight} />
      <MdOutlineArrowBackIos className='absolute top-[20%] left-[2%] transform text-[40px] text-TextCharcoal' onClick={MoveLeft} />
    </div>
  );
}

export default FilterBox;
