import React from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const FilterBox = () => {
  return (
    <div className=' h-full relative'>
        <div className='slider'>
            <ul>
                
            </ul>
        </div>
        <MdArrowForwardIos className='absolute top-[50%] right-[10%] transform text-[40px] text-SecondaryGreen' /> 
        <MdOutlineArrowBackIos className='absolute top-[50%] left-[10%] transform text-[40px] text-SecondaryGreen' /> 
    </div>
  );
}

export default FilterBox;
