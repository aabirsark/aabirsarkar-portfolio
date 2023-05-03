"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import Splash from "@/components/Splash";
import MainPage from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashTransitionEnd = () => {
    setShowSplash(false);
  };

  return (
    <main className="overflow-x-hidden relative h-screen w-screen  ">
      <div className="absolute ">
        <Splash onTransitionEnd={handleSplashTransitionEnd} />
      </div>
      <div className="h-screen w-screen absolute -z-20">
        <MainPage />
      </div>
    </main>
  );
}
