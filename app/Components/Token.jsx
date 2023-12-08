import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import Toggle from './Toggle';

export default function Token({ setOpenSetting }) {
  return (
    <div className="absolute my-0 mx-auto bg-[#1e1e1e] p-8 rounded-lg w-11/12 h-max lg:w-2/5">
      <div className=''>
        <div className="flex items-center justify-between mb-4">
          <h4 className='font-bold text-xl'>Setting</h4>
          <IoCloseSharp className='cursor-pointer' size={30} onClick={() => setOpenSetting(false)} />
        </div>

        <p className="flex items-center justify-start gap-4 mb-2">
          Slippage tolerance
          <FaLock className='cursor-pointer' size={12} />
        </p>

        <div className="flex gap-4 items-center">
          <button className='bg-[#cff80b] border-0 outline-none py-2 px-4 rounded-lg font-bold text-lg'>Auto</button>
          <input className='bg-[transparent] border outline-none w-4/5 border-solid border-[#cff80b] py-2 px-4 rounded-lg text-end' type="text" placeholder='0.10%' />
        </div>

        <p className="flex items-center gap-4 mt-4 mb-2">
          Slippage tolerance
          <FaLock className='cursor-pointer' size={12} />
        </p>

        <div className="flex gap-4 items-center">
          <input className='bg-[transparent] border outline-none w-4/5 border-solid border-[#cff80b] py-2 px-4 rounded-lg text-end' type="text" placeholder='30' />
          <button className='bg-[#cff80b] border-0 outline-none py-2 px-4 rounded-lg font-bold text-lg'>Minutes</button>
        </div>

        <h2 className='text-xl leading-none mt-4 mb-2'>Interface Setting</h2>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-4">Transaction deadline</p>
          <Toggle label="No" />
        </div>

      </div>
    </div>
  )
}
