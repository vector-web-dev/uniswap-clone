"use client"
import Link from 'next/link';
import React, { useState } from 'react';

import { PiSwapBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

import Model from './Model';
import TokenList from './TokenList';

export default function Navbar() {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pool",
      link: "/"
    }
  ]

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className="w-11/12 my-8 mx-auto">
      <div className="grid grid-cols-2 items-center justify-center gap-8 lg:grid-cols-3">

        {/* ============ Left Section ============ */}
        <div className="flex gap-16 items-center">

            {/* ========= Logo ======== */}
          <div className="">
            <PiSwapBold size={50} />
          </div>

          {/* ========== Menu Items ========== */}
          <div className="hidden flex items-center gap-8 lg:flex">
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className='text-lg text-[#cff80b]'>{ el.name }</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ============ Middle Section =========== */}
        <div className="hidden bg-[#1e1e1e] width-4/5 py-3 px-6 rounded-lg my-0 mx-auto lg:block">
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <div className="">
              <IoIosSearch size={20} />
            </div>

            {/* ======== Input Section ======== */}
            <input className='bg-transparent outline-none border-0 text-base' type="text" placeholder="Search Tokens" />
          </div>
        </div>
        
        {/* ============ Right Section =========== */}
        <div className="flex items-center justify-end gap-4">
          <div className=" hidden items-center gap-4 bg-[#1e1e1e] py-4 px-6 cursor-pointer rounded-lg capitalize lg:flex">
            <div>
                <FaEthereum size={20} />
            </div>
            <p className='text-xl leading-none text-[#cff80b]'>Network Name</p>
          </div>
          <button className='flex items-center gap-4 bg-[#1e1e1e] rounded-lg py-3 px-6 text-lg cursor-pointer' onClick={() => setOpenModel(true)}>Address</button>

          {/* ========= Model Component ======== */}
          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* ============= TokenList Component ============ */}
      {openTokenBox && (
        <TokenList setOpenTokenBox={setOpenTokenBox} tokenData="hey"/>
      )}

    </div>
  )
}
