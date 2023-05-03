import Link from "next/link";
import React from "react";

type Props = { techStack: TechStack };

function TechstackCard({ techStack }: Props) {
  return (
    <Link href={techStack.url}>
      <div
        className=" p-3 md:p-5 
      rounded-2xl flex space-x-4 items-center bg-[#fec5bb] cursor-pointer hover:scale-95 transition-all duration-500"
      >
        <img
          src={techStack.image_url}
          alt={techStack.tech}
          className="rounded-xl object-cover h-16 w-16  md:h-24 md:w-24"
        />
        <div className="flex  mt-1 justify-between w-full space-x-3">
          <h1 className="text-lg md:text-2xl font-bold ">{techStack.tech}</h1>

          <div className="flex space-x-4">
            <div className="px-4 py-2 rounded-full bg-[#fae1dd]">
              <p className="text-xs">{techStack.clip_text}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TechstackCard;
