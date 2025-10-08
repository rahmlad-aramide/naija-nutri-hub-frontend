"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const ScrollRef = useRef<HTMLDivElement>(null)

  const handleScrollRight = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollBy({
        left: 100,
        behavior: "smooth"
      })
    }
  }
  return (
    <div className="flex flex-col items-center justify-around min-h-screen background text-foreground">
      <div className="flex flex-col items-center max-w-md w-full gap-10 p-8">
          <header className=" flex flex-col items-center ">
              <Image src='/images/image.png' alt="Food icons" width={257} height={40} className="mb-4"/>
              <h1 className="text-3xl font-normal text-center mb-2" style={{ fontFamily: 'var(--font-source-serif-pro)' }}>Take a picture of your {" "} <span className="text-primary">food</span>, <br /> <span className="text-gray-400">Learn it</span>. <span className="text-gray-400">Make it</span>.</h1>
          </header>

          <main className="flex flex-col items-center w-full gap-4">
              <Link 
                href="/signup" 
                className="block w-full max-w-48 bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md text-center font-medium transition-colors"
              >
                Sign up
              </Link>
              <Link 
                href="/login" 
                className="block w-full max-w-48 bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md text-center font-medium transition-colors"
              >
                Log in
              </Link>
          </main>
      </div>

      <div className="relative w-full max-w-xs mx-auto px-5">
        <div ref={ScrollRef} className="flex items-center space-x-3 overflow-x-auto scrollbar-hide scroll-smooth whitespace-nowrap pr-10">
          <span className="border px-1.5 py-0.5 rounded-xl text-sm">
            Nutrition Facts
          </span>
          <span className="border px-1.5 py-0.5 rounded-xl text-sm">
            Recipes
          </span>
          <span className="border px-1.5 py-0.5 rounded-xl text-sm">
            Restaurant
          </span>
          <span className="border px-1.5 py-0.5 rounded-xl text-sm">
            Smart food recognition
          </span>
        </div>

        <button onClick={handleScrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#282828] text-gray-300 hover:text-white p-1 rounded-full" aria-label="Scroll Right">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
