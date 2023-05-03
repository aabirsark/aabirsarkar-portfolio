import {
  Montserrat,
  Nunito_Sans,
  Poppins,
  Prompt,
  Raleway,
  Roboto_Mono,
  Space_Grotesk,
  Zilla_Slab,
} from "next/font/google";
import Image from "next/image";
import React from "react";

import Header from "./Header";
import Info from "./Info";
import TechStack from "./TechStack";
import Projects from "./Projects";
import WhyMe from "./WhyMe";
import Contact from "./Contact";

const space = Montserrat({ subsets: ["latin"], weight: "500" });

function MainPage() {
  

  return (
    <div className={`w-full ${space.className}`}>
      <Header />
     
        <Info />
        <Projects />
        <TechStack />
        <WhyMe />
        <Contact />
    </div>
  );
}

export default MainPage;
