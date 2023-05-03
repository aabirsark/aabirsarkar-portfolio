"use client";

import React from "react";

function ContactMeButton() {
  const sendEmail = () => {
    const email = "aabirsark@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={sendEmail} className="text-sm text-white bg-zinc-900 rounded-full px-7 h-12 font-bold hover:scale-105 transition-all duration-500">
      Contact me
    </button>
  );
}

export default ContactMeButton;
