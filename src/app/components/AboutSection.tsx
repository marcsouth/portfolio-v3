'use client'

import Image from "next/image"
import Timeline from './Timeline'

export default function AboutSection() {
  return (
   <>

<div className=" my-8 px-4 m-auto max-w-7xl flex gap-4  w-full items-center justify-between max-md:flex-col">
<div className="flex flex-col gap-2 my-4">
  <div className=" flex items-center gap-6 max-w-md max-md:flex-col-reverse">
    <Image src="/images/headshot.png" width={80} height={10}  alt="Marc headshot" className="rounded-full border-solid border-2 border-violet-950"/>
    <h2 className="font-bold text-2xl max-md:text-center ">A Coach, Bodybuilder and a dedicated<span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> Mentor </span> </h2>
    </div>
    <p className="max-w-md max-md:text-center max-md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>


</div>

<Timeline />
   
   
   
   </>
  )
}
