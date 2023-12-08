"use client"
import React from 'react'

export default function Toggle({label}) {
  return (
    <div className="text-center">
      <div className="relative w-16 inline-block text-left top-2">
        <input
          type="checkbox"
          className="hidden toggle_checkbox"
          name={label}
          id={label}
        />
        <label className="toggle_label block truncate cursor-pointe boder-0 border-solid border-[#bbb] rounded-2xl" htmlFor={label}>
          <span className="toggle_inner cursor-pointer" />
          <span className="toggle_switch" />
        </label>
      </div>
    </div>
  )
}
