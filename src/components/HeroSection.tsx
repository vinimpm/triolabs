'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])

  return (
    <section ref={containerRef} className="relative min-h-[100vh] md:min-h-[100vh] lg:min-h-[120vh] overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/80 to-black" />
        <div className="absolute inset-0 bg-[url('/brand/TRIO_LABS_ICONE_PRETO.png')] bg-center bg-no-repeat bg-cover opacity-5" />
      </motion.div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Asymmetric Grid Layout */}
      <div className="relative h-screen flex flex-col justify-between py-8">
        {/* Large Logo - Top Section */}
        <motion.div
          className="pt-24 md:pt-32 px-8 md:px-16 z-10"
          style={{ y: y1, opacity }}
        >
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="w-full max-w-3xl"
          >
            <Image
              src="/brand/TRIO_LABS_HORIZONTAL_COM_LABS_BRANCO.png"
              alt="Trio Labs"
              width={800}
              height={300}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Central Statement - Middle Section */}
        <motion.div
          className="px-8 z-20 my-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <div className="relative bg-black/40 backdrop-blur-sm p-6 md:p-10 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
              A primeira casa de marcas com
              <span className="text-trio-red font-bold"> alma japonesa</span>
            </h3>
            <motion.div
              className="mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="h-[2px] bg-trio-red" />
            </motion.div>
          </div>
        </motion.div>

        {/* Diagonal Overlay Text - Bottom Section */}
        <motion.div
          className="px-4 md:px-16 z-30 pb-8"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="clip-angular bg-zinc-900/90 backdrop-blur-md border-l-4 border-trio-red p-6 md:p-12 max-w-3xl">
            <p className="text-white/80 text-base md:text-xl">
              Não nascemos para agradar. Nascemos para provocar
              <span className="text-trio-red font-semibold"> suor</span>, pulsar
              <span className="text-trio-red font-semibold"> desejo</span> e causar
              <span className="text-trio-red font-semibold"> desconforto criativo</span>.
            </p>
          </div>
        </motion.div>

        {/* Floating Elements - Right Side */}
        <motion.div
          className="hidden md:block absolute top-1/4 right-8 md:right-16 z-10"
          style={{ y: y2 }}
        >
          <motion.div
            className="text-right mb-32"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-2">
              Desde 2018
            </p>
            <h2 className="text-outline text-4xl md:text-5xl font-bold">
              OUSADIA
            </h2>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-white text-xl md:text-2xl mb-2">
              Método
            </p>
            <p className="text-trio-red text-3xl md:text-4xl font-bold">
              TORIÊ
            </p>
          </motion.div>
        </motion.div>

        {/* Japanese Characters Decoration */}
        <motion.div
          className="absolute top-20 right-20 text-8xl text-white/5 font-bold hidden lg:block"
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          創造
        </motion.div>
      </div>
    </section>
  )
}