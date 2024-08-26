import {React, useState} from 'react';
import Map from './Map';
const Visual = () => {
  const [position, setPosition] = useState(null);

  return (
    <form className='my-10 ' name = 'Visuals'>
      <div className="my-10 w-[100%] xl:w-[80%] mx-auto flex flex-col lg:flex-row">

        <div className="flex flex-col basis-1/3 items-center mx-5">
          <label className="text-2xl font-medium text-SecondaryGreen">Species</label>
          <select className="w-[18.5rem] px-5 mt-5  bg-PrimaryBlue text-BackgroundSand font-semibold text-xl rounded-md h-[2rem]">
            <option>Catla</option>
            <option>Rohu</option>
            <option>Hilsa</option>
            <option>Indian Mackerel</option>
          </select>
        </div>

        <div className="basis-1/3 flex flex-col items-center">
          <label className="text-2xl font-medium text-SecondaryGreen mt-5 lg:mt-0">Date Range</label>
          <div className="flex space-x-3 mt-5">
            <input
              type="date"
              className="w-[8rem] lg:w-[12rem] px-4 border bg-PrimaryBlue text-BackgroundSand font-semibold text-[10px] lg:text-[18px] border-gray-300 rounded-md h-[2rem]"
            />
            <span className="text-lg">to</span>
            <input
              type="date"
              className="w-[8rem] lg:w-[12rem] px-4 bg-PrimaryBlue text-BackgroundSand border font-semibold text-[10px] lg:text-[18px] border-gray-300 rounded-md h-[2rem]"
            />
          </div>
        </div>

        <div className="basis-1/3  flex flex-col items-center mx-5">
          <label className='text-2xl font-medium text-SecondaryGreen mt-5 lg:mt-0'>Depth</label>
          <select className="w-[18.5rem] px-5 mt-5  bg-PrimaryBlue text-BackgroundSand font-semibold text-xl rounded-md h-[2rem]">
            <option>0 - 200m</option>
            <option>200 - 1,000m</option>
            <option>1,000 - 4,000m</option>
            <option>4,000 - 6,000m</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:w-[70%] mx-auto w-[100%]'>
        <div className='lg:basis-1/2 w-[80%] mx-auto flex flex-col items-center justify-center'>
          <label className='text-2xl font-medium text-SecondaryGreen mb-5 mx-auto'>Location</label>
            <Map position={position} setPosition={setPosition} />
        </div>

        <div className='Button-container lg:basis-1/2 flex justify-center items-center' onClick={() => console.log(position)}>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-PrimaryBlue my-5'>Generate Graphs</h1>
            <button className='border-none w-[160px] h-[40px] rounded-md bg-AccentCoral font-semibold text-xl text-TextCharcoal' type='text'>Visualize</button>
          </div>
        </div>
      </div>

    </form>
  );
};

export default Visual;
