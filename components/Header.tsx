import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header() {


return (
    <div className="max-w-[90rem] mx-auto">
   
        <header className="flex shadow-xl mt-4 bg-zinc-900 m-2 rounded-full items-center justify-between p-3 text-white">
          <div className="flex space-x-3  items-center">
            <button className="h-8 w-8  p-[0.35rem] rounded-full ring-1 ring-zinc-700 ">
              <EnvelopeIcon />
            </button>
            <p className="text-sm ">aabirsark@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <Link href={"https://www.instagram.com/me__aabir_k/"}>
              <button className="h-8 w-8  p-[0.35rem] rounded-full ring-1 ring-zinc-700 ">
                <FaInstagram className="h-5 w-5" />
              </button>
            </Link>
            <Link href={"https://github.com/aabirsark"}>
              <button className="h-8 w-8  p-[0.35rem] rounded-full ring-1 ring-zinc-700 ">
                <FaGithub className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </header>
    </div>
  );
}

export default Header;
