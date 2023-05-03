import { projects } from "@/lib/constants/projects";
import {
  ArrowDownOnSquareIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const font = Space_Grotesk({ subsets: ["latin"], weight: "400" });

function Projects() {
  return (
    <div className="px-4 w-full max-w-[90rem] mx-auto  ">
      <div className="rounded-2xl  h-full w-full p-4 md:p-7 overflow-hidden flex z-0 bg-[#c1d3fe] flex-col text-black ">
        <h1
          className={` select-none text-3xl lg:text-5xl ${font.className}  text-[#80a5ff] mx-auto md:mx-0 `}
        >
          Projects
        </h1>

        <div className="grid mt-4 md:mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((e) => {
            return (
              <div key={e.name} className="flex p-5  flex-col bg-[#b6ccfe] rounded-xl items-start justify-between">
                <div className="flex flex-col items-start space-y-3 ">
                  <Image
                    src={e.image_url}
                    alt={e.name}
                    height={1440}
                    width={2560}
                    className="rounded-xl"
                  />
                  <h1 className="text-xl font-bold">{e.name}</h1>
                  <p className="text-sm">{e.desc}</p>
                </div>
                <Link href={e.code}>
                  <button className="px-6 py-2 mt-5 space-x-3 ring-2 ring-black rounded-full flex items-center ">
                    <FaGithub />
                    <p>View code</p>
                  </button>
                </Link>
              </div>
            );
          })}
          <div className="col-span-1 p-5 overflow-hidden md:col-span-2 bg-[#e0aaff] relative z-0 rounded-xl h-[27rem] flex justify-center items-center">
            <div className="flex flex-col items-center text-center max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold ">
                How can you forget this portfolio ?
              </h1>
              <p className="mt-4 text-sm text-black opacity-50">
                Well, get ready to buckle up because you have just seen the tip
                of the iceberg with what I can bring to the table! Check out my
                more projects at my Github
              </p>
              <Link href={"https://github.com/aabirsark"}>
                <button className="px-6 py-3 mt-5 space-x-3 bg-black text-white rounded-full flex items-center ">
                  <FaGithub />
                  <p className="text-sm font-bold">My Github</p>
                </button>
              </Link>
            </div>

            <div className="h-[40rem] w-[40rem] ring-1 ring-[#ffe6ff]  animate-pulse absolute rounded-full -z-20"></div>

            <div className="h-96 w-96 ring-1 ring-[#ffe6ff]  animate-pulse absolute rounded-full -z-20"></div>
            <div className="h-44 w-44 ring-1 ring-[#ffe6ff]  animate-pulse absolute rounded-full -z-20"></div>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}

export default Projects;
