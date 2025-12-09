// import React from 'react'
import { BiExit } from "react-icons/bi";
import Button from "../Button/index";
export default function Header({title, onClick = () => {} }) {
  return (
    <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t min-w-[500px]
    '>
      <h3 className='text-xl font-semibold'>
        {title}
      </h3>
      <Button Bgcolor="bg-none" hoverBg="hover:bg-none" Ukuran="py-2 px-5"
      onClick={() => onClick() }
      >
      <span className="opacity-7 px-2 py-1 bg-red-600 rounded  inline-flex items-center justify-center shadow-lg hover:bg-red-400">
            <BiExit />
      </span>
      </Button>
    </div>
  )
}
