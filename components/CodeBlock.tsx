"use client";

import { whyMe } from '@/lib/constants/information';
import { Source_Code_Pro } from 'next/font/google';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const sourceCode = Source_Code_Pro({ subsets: ["latin"], weight: "400" });


function CodeBlock() {
    const typewriter = Typewriter({
        words : [whyMe],
        cursor: true,
        typeSpeed:10,
        cursorColor : "#52b788"
    });

   

  return (
    <div className="col-span-3 min-h-[30rem]  bg-zinc-900 rounded-2xl py-5 px-7 flex text-white flex-col space-y-5 shadow-2xl">
    <div className="flex items-center  mt-3 space-x-2">
      <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
      <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
      <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
    </div>
    <p className={` ${sourceCode.className} text-green-400 text-sm md:text-lg`}>
      <span className="font-bold text-white">$ [aabisark] : </span>{" "}
      {typewriter}
    </p>
  </div>
  )
}

export default CodeBlock

function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
