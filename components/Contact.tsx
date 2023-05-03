import React from "react";
import ContactMeButton from "./ContactMe";


function Contact() {
  
  return (
    <div className="max-w-[90rem] mx-auto h-[80vh] px-4 mt-4  mb-6">
      <div className="  rounded-2xl w-full h-full  overflow-hidden relative flex justify-center items-center z-0 bg-gray-50">
        <div className="flex flex-col space-y-4 items-center text-center mx-3">
          <h1 className="text-4xl font-bold">Want to work together?</h1>
          <p> Always feel free to contact me, Thank you ! </p>
          <ContactMeButton/>
        </div>

        {/* gradient blocks */}
        <div className="h-40 w-72 rotate-12 absolute -z-20 bg-rose-200 blur-3xl"></div>
        <div className="h-40 w-72 rotate-12 absolute -z-20 bg-blue-200 translate-x-40 blur-3xl"></div>
        <div className="h-40 w-72 rotate-12 absolute -z-20 bg-teal-100 -translate-x-40 blur-3xl"></div>
        {/* circles */}
        <div className="h-72 w-72  absolute -z-10 ring-gray-300 animate-pulse ring-1 rounded-full  "></div>
        <div className="h-[28rem] w-[28rem]  absolute -z-10 ring-gray-300 animate-pulse ring-1 rounded-full  "></div>
        <div className="h-[42rem] w-[42rem]  absolute -z-10 ring-gray-300 animate-pulse ring-1 rounded-full  "></div>
        <div className="h-[58rem] w-[58rem]  absolute -z-10 ring-gray-300 animate-pulse ring-1 rounded-full  "></div>
      </div>
    </div>
  );
}

export default Contact;
