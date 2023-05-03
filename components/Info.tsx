import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import Image from "next/image";
import React from "react";
import ContactMeButton from "./ContactMe";
import { avatar } from "@/lib/constants/information";

function Info() {
  return (
    <div className="p-4 mx-auto flex items-center md:space-x-4 max-w-[90rem] group flex-col-reverse md:flex-row ">
      <div className="md:h-[40vh] lg:h-[50vh] lg:max-h-96 w-full md:w-auto mt-4 md:mt-0 md:flex-1 bg-gray-50 relative z-0 rounded-xl overflow-hidden">
        <div className="flex flex-col h-full justify-between items-start w-full p-6 ">
          <div className="flex flex-col mb-12 md:mb-0">
            <h1 className={`font-bold text-2xl lg:text-3xl mt-4`}>
              Hi, I am Aabir Kaveri Sarkar - a full stack developer from India
            </h1>
            <p className="text-xs text-gray-600 mt-2 lg:text-sm lg:mt-3">
              I specialize in Flutter / NextJS and take pride in creating
              visually stunning UIs that not only look great but also function
              flawlessly. If you&apos;re looking for a talented developer to join
              your team, I&apos;m your guy!
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <ContactMeButton />
            <button className="h-12 w-12 rounded-full ring-1 ring-black p-3">
              <ArrowTopRightOnSquareIcon />
            </button>
          </div>
        </div>

        {/* THESE ARE GRADIENT OBJECTS THAT MOVES WHEN HOVERED */}

        <div className="absolute h-40 w-40 rounded-full -z-20 bg-indigo-300 blur-3xl right-0 bottom-0 transition-all duration-1000 group-hover:-translate-x-20 group-hover:-translate-y-40"></div>
        <div className="absolute h-40 w-40 rounded-full -z-20 bg-orange-200 blur-3xl right-20 -bottom-10 transition-all duration-1000 group-hover:translate-x-5 group-hover:-translate-y-20"></div>
        <div className="absolute h-40 w-40 rounded-full -z-20 bg-rose-200 blur-3xl right-40 -bottom-20 transition-all duration-1000 group-hover:-translate-x-28 group-hover:-translate-y-20"></div>
      </div>


      {/* profile image */}
      <div className="md:h-[40vh] lg:h-[50vh] lg:max-h-96  w-full md:w-auto aspect-square bg-zinc-300 rounded-xl overflow-hidden md:shadow-xl object-cover object-center">
        <Image src={"/images/aab.jpg"} alt={"Aabir Sarkar"} height={720} width={720} ></Image>
      </div>
    </div>
  );
}

export default Info;
