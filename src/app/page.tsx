import Image from "next/image";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <div>
        Hero
      </div>
      {/* About */}
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
