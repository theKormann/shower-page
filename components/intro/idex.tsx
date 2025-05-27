"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Intro({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<
    Array<{ id: number; x: number; y: number; size: number; color: string }>
  >([])

  useEffect(() => {
    const colors = [
      "rgba(33, 81, 159, 0.75)",  
      "rgba(84, 153, 24, 0.3)",   
      "rgba(96, 165, 250, 0.3)",  
      "rgba(60, 122, 21, 0.73)",  
    ]

    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <title>Hovet Lilicão</title>
        {bubbles.map((bubble) => (
          <Intro key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}

export default function FloatingBubblesBackground({
  title = "Hovet Lilicão",
}: {
  title?: string
}) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden 
                    bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <FloatingBubbles />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto flex flex-col gap-8 items-center"
        >

          <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-1 shadow-md">
            <Image
              src="/images/intro.png" 
              alt="Logo Hovet Lilicão" 
              className="w-full h-full object-contain" 
              width={64}
              height={64}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                               bg-gradient-to-r from-blue-600 to-green-600 
                               dark:from-blue-300 dark:to-green-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="flex justify-center inline-block group relative bg-gradient-to-b from-blue-400/30 to-green-400/30 
                       dark:from-blue-600/30 dark:to-green-600/30 p-px rounded-2xl backdrop-blur-lg 
                       overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-md 
                         bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 
                         text-blue-600 dark:text-blue-300 transition-all duration-300 
                         group-hover:-translate-y-0.5 border border-blue-200/50 dark:border-blue-700/50
                         hover:shadow-md dark:hover:shadow-blue-900/30 cursor-pointer w-full"
              onClick={() => window.location.href = "/banho-e-tosa"}
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Conheça o nosso Banho e Tosa!
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                           transition-all duration-300"
              >
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}