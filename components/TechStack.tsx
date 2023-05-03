import React from "react";
import TechstackCard from "./TechstackCard";
import { techstacks } from "@/lib/constants/techstacks";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"], weight: "400" });

function TechStack() {
  return (
    <div className="mt-4 px-4 w-full max-w-[90rem] mx-auto">
      <div className="rounded-2xl mb-4 h-full w-full p-3 md:p-7 relative bg-[#fcd5ce] text-black ">
        <h1
          className={`w-full text-center  md:text-start md:ml-2 select-none text-3xl lg:text-5xl ${font.className} text-[#f08080] opacity-40 `}
        >
          My Techstack
        </h1>
        <div
          className={`grid ${font.className} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 justify-center mt-4 md:mt-7`}
        >
          {techstacks.map((e) => (
            <TechstackCard key={e.tech} techStack={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
