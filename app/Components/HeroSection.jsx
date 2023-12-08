"use client"
import React, { useState } from 'react';

import { IoSettingsSharp } from "react-icons/io5";
import { SiEthereum } from "react-icons/si";
import SearchToken from './SearchToken';
import Token from './Token';

export default function HeroSection({ accounts, tokenData }) {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  // ======== Token 1 ==========
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  // ======== Token 2 ==========
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <div className="w-11/12 my-8 mx-auto flex items-center justify-center relative">
      <div className="mt-20 bg-[#1e1e1e] p-4 rounded-lg w-11/12 md:w-11/12 lg:w-2/5">
        <div className="flex items-center justify-between">
          <p className='text-lg'>Swag</p>
          <div className='cursor-pointer'>
            <IoSettingsSharp size={25} onClick={() => setOpenSetting(true)} />
          </div>
        </div>

        <div className="flex items-center justify-between border border-solid border-[#cff80b] rounded-lg pl-8 mt-4">
          <input className='border-0 outline-none bg-transparent text-[#cff80b] text-xl w-1/2 lg:w-full' type="number" placeholder='0.0' />
          <button className='flex items-center justify-between gap-4 text-[#000] leading-none bg-[#cff80b] p-4 font-bold text-xl rounded-lg' onClick={() => setOpenToken(true)}>
            {tokenOne.image || <SiEthereum size={15} />}
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        <div className="flex items-center justify-between border border-solid border-[#cff80b] rounded-lg pl-8 mt-4">
          <input className='border-none outline-none bg-transparent text-[#cff80b] text-xl' type="number" placeholder='0.0' />
          <button className='flex items-center justify-between text-[#000] gap-4 leading-none bg-[#cff80b] p-4 font-bold text-xl rounded-lg' onClick={() => setOpenTokenTwo(true)}>
            {tokenTwo.image || <SiEthereum size={15} />}
            {tokenTwo.name || "ETH"}
            <small>2479</small>
          </button>
        </div>

        {accounts ? (
          <button className="bg-[#cff80b] border-none outline-none text-[#000] w-full mt-6 p-4 rounded-3xl text-xl">Connect Wallet</button>
        ) : (
            <button className="bg-[#cff80b] border-none outline-none width-full mt-6 p-4 rounded-3xl text-xl" onClick={() => {}}>Swap</button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}
      
      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}

      {openTokenTwo && (
        <SearchToken
          openTokenTwo={setOpenTokenTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  )
}
