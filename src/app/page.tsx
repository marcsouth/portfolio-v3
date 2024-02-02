import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
<>
<div className="relative flex py-6  flex-col items-center w-full h-96 px-4">
  <div className="absolute inset-0 bg-[url('/images/landing-to-try.jpg')] bg-cover bg-top w-full bg-no-repeat brightness-50 "></div>

  {/* Text elements */}
  <div className="relative z-41">
    <h1 className="font-bold text-6xl text-center px-4 text-white"> MARC<span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> VINOKUROV </span></h1>
    <p className="text-center text-white  mt-2">Front-end Development and Software Portfolio</p>
  </div>
</div>

<AboutSection />

</>
  )
}