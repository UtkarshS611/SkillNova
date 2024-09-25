import React from 'react'
import { cn } from "./lib/utils";
import AnimatedGridPattern from "./components/magicui/animated-grid-pattern";
import AnimatedGradientText from "./components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

const App = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Animated Grid Pattern
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className='h-[100px] w-[100px] rounded-full bg-black ml-4 text-white flex justify-center items-center'>
          hello
      </div>
      <div className="z-10 flex p-2  absolute top-10">
      <AnimatedGradientText>
        🦄 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing excellence
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
    </div>
  )
}

export default App
