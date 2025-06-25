import Image from "next/image";

import { Header } from "@/components/Header";
import Button from "@/components/Buttons";
import { HeaderCard } from "@/components/HeaderCard";
import { XSlider } from "@/components/XSlider";

const LogoPaths = ['/LogoDrib.svg','/LogoFace.svg','/LogoPint.svg','/LogoTwit.svg','/logoIn.svg','/logoM.svg','/logoRed.svg','/logoVK.svg'];
export default function Home() {
  const imageComponents = LogoPaths.map((name, index) => (
    <img
      key={index}
      src={`${name}`} // This is relative to `public/`
      alt={`Image ${index}`}
      className="w-8 h-8"
    />
  ));
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <div className=" relative pt-6">
        <Header/>

        {/* background */}
        <div className="absolute inset-0 top-0 left-0 w-full -z-10"
          style={{
              //height: 'calc(100% + 50px)',
              background: `
                linear-gradient(0deg, #000000 50%, transparent 50%),
                linear-gradient(
                  90deg,
                  transparent 59%,
                  #2A2A2A 59%,
                  #2A2A2A 60%,
                  transparent 60%,
                  transparent 20%,
                  #2A2A2A 20%,
                  #2A2A2A 30%,
                  transparent 30%
                )  
              `,
              backgroundSize: '6em 2em',
              backgroundColor: '#000000',
              opacity: 1,
          }} />
        
        {/* Hero */}
        <div className="z-10 relative flex flex-col text-center items-center justify-center mx-7 mt-20 ">
          <h1 className="text-white font-bold text-4xl md:text-7xl whitespace-nowrap tracking-tight">Minimize your tabs.</h1>
          <h1 className="text-white text-4xl md:text-7xl whitespace-nowrap tracking-tight">Find the trends!</h1>
          <p className="text-[#8B8B8B] text-[14px] md:mt-6">Don’t let your computer memories consumes all of those browser tabs.<br/>Findtrend let you gathers all of your favorite website into one place.</p>
          <Button className="whitespace-nowrap text-[14px] mt-8 w-[180px]">Get Started 🔥</Button>
          <div className="flex flex-col-reverse pt-[70px] md:flex-row-reverse pb-24">
            <HeaderCard icon="/LogoDrib.svg" title="Elon Musk - Search" className="rotate-2 drop-shadow-xl/50 md:bottom-5"/>
            <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" className="-rotate-2  drop-shadow-xl/50"/>
            <HeaderCard icon="/LogoPint.svg" title="Popular Design - Search" className="rotate-2 drop-shadow-xl/50"/>
            <HeaderCard icon="/LogoTwit.svg" title="Cryptopunk - Search" className="-rotate-4 drop-shadow-xl/50"/>
          </div>
        </div>
      </div>

      <div className="bg-[#A8FF35] py-20 flex flex-col justify-center items-center gap-20">
        <h1 className="text-3xl font-extrabold">Open new tabs is sh*t</h1>
        <div className="bg-white p-6 rounded-2xl">
          <HeaderCard icon="/logo.svg" title="Findtrend - Elon Musk" className="w-[290px]"/>
        </div>
        <p className="text-[14px] text-center">
        A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.
        </p>
      </div>
      <div className="flex flex-col  justify-center items-center font-extrabold text-4xl mt-20 px-4">
        <p>Findtrend helps you to increase your<br/>productivity and reduce your computer's<br/>memory load,<span className="text-[#ADADAD]"> an application that can<br />fulfill your daily browsing needs.</span></p>
        <h1 className="text-center mt-40">Findtrend make +1000 Startup grow</h1>
      </div>

      {/* How It Works */}
      <div>
        <h1 className="text-center text-4xl font-extrabold mt-40">All platform connect to Findtrend</h1>
        <XSlider list={imageComponents} sliderStyle="gap-4 mt-8" itemStyle="p-4"/>
        <Button className="bg-black text-white px-6 mx-auto">View More Trend</Button>
      </div>
      {/* Pricing */}
      <div className="mt-20 bg-black">
        <h1 className="text-center text-4xl font-extrabold pt-20 text-white">Get your best deal</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
}


