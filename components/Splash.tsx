import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Comfortaa } from "next/font/google";
import { LANGUAGES, getHelloTranslation } from "@/lib/services/getLanguages";

const font = Comfortaa({ subsets: ["latin"], weight: "700" });

interface SplashProps {
  onTransitionEnd: () => void;
}

function Splash({ onTransitionEnd }: SplashProps) {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const circleClipPath = "circle(50% at 50% 50%)";

  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();


  // MORE PERFORMANT CODE
  const animate = (time : number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime > 120) {
        setCurrentLanguageIndex((current) => {
          if (current === 9) {
            return 9;
          }
          return (current + 1) % LANGUAGES.length;
        });
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);


  const slideVariants = {
    hidden: {
      // y: "0%",
      opacity: 1,
      clipPath: "circle(100% at 50% 50%)"

    },
    visible: {
      // y: "-100%",
      opacity: 1,
      clipPath: "circle(0% at 50% 50%)"
    },
  };

  return (  
      <motion.div
        className="h-screen w-screen flex bg-gradient-to-br from-zinc-900  to-black justify-center items-center z-0"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.2,
          delay: 1.2,
        }}
        onAnimationComplete={onTransitionEnd}
      >
        <h1
          className={`text-6xl md:text-7xl  lg:text-8xl ${font.className} font-bold text-[#faedcd]`}
        >
          {getHelloTranslation(LANGUAGES[currentLanguageIndex])}
        </h1>
      </motion.div>
  );
}

export default Splash;
