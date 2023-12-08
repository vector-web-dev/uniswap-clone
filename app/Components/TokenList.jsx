import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

export default function TokenList({tokenDate, setOpenTokenBox}) {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="absolute rounded-lg bg-[#1e1e1e] mt-8 p-4 w-80 right-4 md:right-12 lg:right-14">
      <p className="absolute right-2 cursor-pointer top-2 z-50 md:top-1 right-1 lg:top-1 right-1" onClick={() => setOpenTokenBox(false)}>
        <IoCloseSharp size={25} />
      </p>
      <div className="w-full py-4 px-2 font-boldest leading-0 text-[#cff80b] text-3 rounded-lg">
        <h2>Your Token List</h2>
      </div>

      {data.map((el, i) => (
        <div className="relative cursor-pointer p-2 border-b border-solid border-[#d1f80b53]">
          <div className="grid grid-5 gap-4 items-center">
            <p className="bg-[#cff80b] rounded text-[#1e1e1e] font-bold flex justify-center items-center">
              Hey
            </p>
            <p className="uppercase">
              <span className='font-black text-[#cff80b] mr-2'>34</span> Gold Coin
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
