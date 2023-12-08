"use client"
import React from 'react'

import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Model({setOpenModel, connectWallet}) {
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"]


  return (
    <div className="absolute inset-0 bg-[#1e1e1e5a] grid items-center justify-center h-[100vh] w-[100vw] z-50">
      <div className="bg-[#1e1e1e] p-8 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <p className='text-xl'>Connect a Wallet</p>
          <div className='cursor-pointer'>
            <IoCloseSharp size={30} onClick={() => setOpenModel(false)} />
          </div>
        </div>

        <div className='flex flex-col items-start justify-center gap-2 mb-4'>
          {walletMenu.map((el, i) => (
            <p className='flex items-center justify-between bg-[#cff80b] p-3 rounded-lg text-[#1e1e1e] font-bold cursor-pointer w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300' key={i + 1} onClick={() => connectWallet()}>
              {el}
              <FaArrowRightLong size={13} />
            </p>
          ))}
        </div>

        <p className="p-4 leading-5 border border-solid border-[#cff80b] rounded-lg tracking-wider text-sm">
          By connecting a wallet, agree to Uniswap Labs' <br /> Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  )
}
