

import { whyMe as whyMeText } from "@/lib/constants/information";
import { Source_Code_Pro, Space_Grotesk } from "next/font/google";
import React from "react";
import CodeBlock from "./CodeBlock";

const space = Space_Grotesk({ subsets: ["latin"], weight: "500" });

function WhyMe() {
  return (
    <div className="px-4 w-full mt-4 max-w-[90rem] mx-auto ">
      <div className="rounded-2xl grid grid-cols-1 md:grid-cols-5 md:gap-5 h-full w-full py-7 px-5 md:px-9  overflow-hidden z-0 bg-[#d0f4de]  items-center relative">
        <h1
          className={`max-w-2xl text-zinc-900 md:leading-[3.5rem] md:col-span-2 text-3xl md:text-5xl ${space.className} text-center md:text-start mb-6 md:mb-0`}
        >
          What makes me different from other developer ?{" "}
        </h1>
          <CodeBlock/>

        {/*  have circles */}
        <div className="absolute -z-20 ring-1 animate-pulse ring-white  h-96 w-96 left-96 rounded-full"></div>
        <div className="absolute -z-20 ring-1 animate-pulse ring-white  h-96 w-96 -left-48 -top-28 rounded-full"></div>
      </div>
    </div>
  );
}

export default WhyMe;
