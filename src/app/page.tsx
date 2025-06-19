import Image from "next/image";

import { Header } from "@/components/Header";
import Button from "@/components/Buttons";
import { HeaderCard } from "@/components/HeaderCard";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className=" relative pt-6 h-fit">
        <Header/>

        {/* background */}
        <div className="absolute inset-0 top-0 left-0 w-full -z-10"
          style={{
              height: 'calc(100% + 50px)',
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
        <div className="z-10 relative flex flex-col text-center justify-center mx-7 my-20 ">
          <h1 className="text-white font-bold text-4xl whitespace-nowrap tracking-tight">Minimize your tabs.</h1>
          <h1 className="text-white text-4xl whitespace-nowrap tracking-tight">Find the trends!</h1>
          <p className="text-[#8B8B8B] text-[14px]">Don’t let your computer memories consumes all of those browser tabs.<br/>Findtrend let you gathers all of your favorite website into one place.</p>
          <Button className="mx-[90px] whitespace-nowrap text-[14px] mt-8">Get Started 🔥</Button>
          <div className="flex flex-col-reverse pt-[70px]">
            <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" className="rotate-2 drop-shadow-xl/50"/>
            <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" className="-rotate-2  drop-shadow-xl/50"/>
            <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" className="rotate-2 drop-shadow-xl/50"/>
            <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" className="-rotate-4 drop-shadow-xl/50"/>
          </div>
        </div>
      </div>

      <div>
        About
      </div>
      {/* How It Works */}
      <div>
        How It Works
      </div>
      {/* Pricing */}
      <div>
        Pricing
      </div>
    </div>
  );
}


