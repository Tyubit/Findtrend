import Image from "next/image";

import { Header } from "@/components/Header";
import Button from "@/components/Buttons";
import { HeaderCard } from "@/components/HeaderCard";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className=" relative h-screen pt-6">
        <Header />

        {/* Hero */}
        <div className="z-10 relative flex flex-col text-center justify-center mx-7 mt-20">
          <h1 className="text-white font-bold text-4xl whitespace-nowrap tracking-tight">Minimize your tabs.</h1>
          <h1 className="text-white text-4xl whitespace-nowrap tracking-tight">Find the trends!</h1>
          <p className="text-[#8B8B8B] text-[14px] mt-4">Don’t let your computer memories consumes all of those browser tabs.<br/>Findtrend let you gathers all of your favorite website into one place.</p>
          <Button className="mx-[90px] mt-8 whitespace-nowrap text-[14px]">Get Started 🔥</Button>
          <HeaderCard icon="/LogoFace.svg" title="Product Design - Search" />
        </div>

        {/* background */}
        <div className="absolute top-0 left-0 w-full h-screen"
             style={{
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


