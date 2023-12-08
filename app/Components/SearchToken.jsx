"use client"
import React, { useState } from 'react';

import { IoCloseCircleSharp } from "react-icons/io5";
import { FaSearchDollar } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

export default function SearchToken({ openToken, tokens, tokenData }) {

  const [active, setActive] = useState(1);

  const coin = [
    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },

    {
      img: <FaEthereum size={15} />,
      name: "ETH"
    },


  ]
  return (
    <div className="absolute my-0 mx-auto bg-[#1e1e1e] p-8 rounded-lg w-[95%] h-[23rem] lg:w-max">
      <div className="">
        <div className="flex items-center justify-between mb-4">
          <h4>Sealect a token</h4>
          <IoCloseCircleSharp className='cursor-pointer' size={20} onClick={() => openToken(false)} />
        </div>

        <div className="">
          <div className="flex items-center bg-[#cff80b] py-2 px-4 rounded-lg gap-4">
            <FaSearchDollar className='cursor-pointer' size={20} />
            <input className="bg-[transparent] outline-none border-0 text-[#1e1e1e] font-medium w-[90%]" type="text" placeholder='Search name and paste the address' />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 box-tokens lg:grid grid-cols-6">
            {coin.map((el, i) => (
              <span
                key={i + 1}
                className={active == i + 1 ? `${"bg-[#cff80b] text-[#1e1e1e]"}` : ""}
                onClick={() => (setActive(i + 1 ), tokens({ name: el.name, image: el.img }))} 
              > 
                {el.img || <FaEthereum size={15} />}
                {el.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
