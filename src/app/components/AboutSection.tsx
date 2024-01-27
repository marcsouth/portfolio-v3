'use client'

import Image from "next/image"
import Timeline from './Timeline'
import { SiGraphql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

export default function AboutSection() {
  return (
    <>

      <div className=" my-8 px-4 m-auto max-w-7xl flex gap-4  w-full items-center justify-between max-md:flex-col max-md:gap-0">
        <div className="flex flex-col gap-2 my-4">
          <div className=" flex items-center gap-6 max-w-md max-md:flex-col-reverse">
            <Image src="/images/headshot.png" width={80} height={10} alt="Marc headshot" className="rounded-full border-solid border-2 border-violet-950" />
            <h2 className="font-bold text-2xl max-md:text-center ">An Frontend developer, Software Engineer and a dedicated<span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> team member </span> </h2>
          </div>
          <p className="max-w-md max-md:text-center max-md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

        <div className="flex flex-col gap-2 my-8 flex-wrap">

          <h2 className="font-bold text-2xl text-center mb-6 ">Skills</h2>

          <div className="w-full max-w-lg flex gap-8 flex-wrap items-center justify-center">

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <SiNextdotjs size={45} className="text-white" />
            </div>

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <SiGraphql size={45} className="text-white" />
            </div>

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <FaReact size={45} className="text-white" />
            </div>

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
            <BiLogoTypescript  size={45} className="text-white" />
            </div>


            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <SiTailwindcss size={45} className="text-white" />
            </div>


            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <BiLogoJavascript size={45} className="text-white" />
            </div>

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <IoLogoCss3 size={45} className="text-white" />
            </div>

            <div className="bg-primary rounded-full flex items-center justify-center w-16 h-16">
              <FaHtml5 size={45} className="text-white" />
            </div>


          </div>

        </div>
      </div>

      <Timeline />



    </>
  )
}
