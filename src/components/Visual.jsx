import React from 'react';

const Visual = () => {
  return (
    <form className="my-10 w-[100%] xl:w-[80%] mx-auto flex flex-col lg:flex-row">

      <div className="flex flex-col basis-1/3 items-center mx-5">
        <label className="text-2xl font-medium text-SecondaryGreen">Species</label>
        <select className="w-[20rem] px-5 mt-5  bg-PrimaryBlue text-AccentCoral font-semibold text-xl rounded-md h-[2rem]">
          <option>Catla</option>
          <option>Rohu</option>
          <option>Hilsa</option>
          <option>Indian Mackerel</option>
        </select>
      </div>

      <div className="basis-1/3 flex flex-col items-center">
        <label className="text-2xl font-medium text-SecondaryGreen">Date Range</label>
        <div className="flex space-x-3 mt-5">
          <input
            type="date"
            className="w-[12rem] px-4 border  bg-PrimaryBlue text-AccentCoral font-semibold text-md border-gray-300 rounded-md h-[2rem]"
          />
          <span className="text-lg">to</span>
          <input
            type="date"
            className="w-[12rem] px-4 bg-PrimaryBlue text-AccentCoral border font-semibold text-md border-gray-300 rounded-md h-[2rem]"
          />
        </div>
      </div>

      <div className="basis-1/3  flex flex-col items-center mx-5">
        <label className='text-2xl font-medium text-SecondaryGreen'>Depth</label>
        <select className="w-[20rem] px-5 mt-5  bg-PrimaryBlue text-AccentCoral font-semibold text-xl rounded-md h-[2rem]">
          <option>0 - 200m</option>
          <option>200 - 1,000m</option>
          <option>1,000 - 4,000m</option>
          <option>4,000 - 6,000m</option>
        </select>
      </div>
    </form>
  );
};

export default Visual;
