import React, { useRef, useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const FilterBox = ({ data, selectedItems, SetSelectedItems }) => {
  const All_Species = Object.keys(data[0]).filter((key) => key !== "date");

  const slider = useRef();
  const [X_Pos, setX_Pos] = useState(0);

  const handleClick = (key) => {
    if (selectedItems.includes(key)) {
      SetSelectedItems(selectedItems.filter((Item) => Item !== key));
    } else {
      SetSelectedItems([...selectedItems, key]);
    }
    console.log(selectedItems);
  };

  const MoveRight = () => {
    setX_Pos((prev) => prev - 180);
    slider.current.style.transform = `translateX(${X_Pos - 180}px)`;
  };

  const MoveLeft = () => {
    if (X_Pos === 0) return;
    setX_Pos((prev) => prev + 180);
    slider.current.style.transform = `translateX(${X_Pos + 180}px)`;
  };

  return (
    <div className='h-1/2 relative flex justify-center items-center'>
      <div className='slider h-[150px] py-10 overflow-hidden w-[80%]'>
        <ul className='flex w-[1000%] h-full items-stretch duration-500 font-medium text-BackgroundSand' ref={slider}>
          {All_Species.map((Fish_name, index) => {
            return (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{  scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className={`w-[150px] p-[20px] bg-gradient-to-b from-PrimaryBlue flex justify-center items-center mx-5 rounded-xl shadow-xl duration-200 ${
                  selectedItems.includes(Fish_name)
                    ? "to-AccentCoral text-white"
                    : "to-SecondaryGreen"
                }`}
                onClick={() => handleClick(Fish_name)}
                key={index}
              >
                <h1 className='text-xl'>{Fish_name}</h1>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <FaCircleArrowRight className='absolute top-[35%] right-[1%] transform text-[40px] text-TextCharcoal' onClick={MoveRight} />
      <FaCircleArrowLeft className='absolute top-[35%] left-[2%] transform text-[40px] text-TextCharcoal' onClick={MoveLeft} />
    </div>
  );
}

export default FilterBox;
