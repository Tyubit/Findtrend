import Image from "next/image";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className=" relative h-screen pt-6">
        <Header />
        {/* Hero */}
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
  }}>
        
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


