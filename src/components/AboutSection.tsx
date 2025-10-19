'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section ref={containerRef} id="sobre" className="relative min-h-[200vh] bg-white overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-trio-red/5 to-white" />
        <div className="noise-overlay" />
      </div>

      {/* Title Section - Large Typography */}
      <div className="relative pt-32 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <h2 className="display-title text-black text-center md:text-left">
            7 ANOS
            <span className="text-outline-black block">DE OUSADIA</span>
          </h2>
        </motion.div>
      </div>

      {/* Stats Section - Clean Aligned Layout */}
      <div className="relative mt-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-8xl md:text-9xl font-bold text-trio-red leading-none block">
                100+
              </span>
              <p className="text-black text-xl md:text-2xl mt-4 font-bold">MARCAS</p>
              <p className="text-black/70 text-base uppercase tracking-wider mt-2">Transformadas</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <span className="text-8xl md:text-9xl font-bold text-black/30 leading-none block">
                1ª
              </span>
              <p className="text-black text-xl md:text-2xl mt-4 font-bold">CASA</p>
              <div className="inline-block bg-trio-red px-4 py-1 mt-2">
                <p className="text-white text-base font-semibold uppercase tracking-wider">Com alma japonesa</p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <span className="text-8xl md:text-9xl font-bold text-trio-red/40 leading-none block">
                ∞
              </span>
              <p className="text-black text-xl md:text-2xl mt-4 font-bold">POSSIBILIDADES</p>
              <p className="text-black/70 text-base uppercase tracking-wider mt-2">Infinitas</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CEO Section - Documentary Style */}
      <div className="relative mt-32 md:mt-64 px-8 md:px-0">
        <div className="grid grid-cols-1 md:asymmetric-grid gap-12 md:gap-0">
          {/* Image Area */}
          <motion.div
            className="md:col-span-5 md:col-start-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative h-[50vh] md:h-[70vh] clip-angular bg-gradient-to-br from-trio-red/20 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="text-[8rem] md:text-[15rem] text-black/5 font-bold leading-none">
                    LA
                  </div>
                  <p className="text-trio-red text-xl md:text-2xl font-light -mt-8 md:-mt-16">LUANA ANTTONI</p>
                </div>
              </div>
              {/* Decorative Border */}
              <motion.div
                className="absolute inset-0 border-2 border-trio-red/20"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="md:col-span-7 md:col-start-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="md:pl-8 md:pr-16 md:pt-16">
              <span className="text-trio-red text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em]">
                CEO & Fundadora
              </span>
              <h3 className="text-4xl md:text-8xl font-bold text-black mt-4 mb-6 md:mb-8">
                LUANA<br/>
                <span className="text-outline-filled-black">ANTTONI</span>
              </h3>

              <div className="space-y-4 md:space-y-6 text-black/70 text-base md:text-lg">
                <p>
                  Estrategista apaixonada por negócios e comportamento humano.
                </p>
                <p>
                  Com formações em Marketing, Psicologia do Consumo, Pricing Strategy,
                  Neuromarketing e Gestão de Projetos.
                </p>
                <p className="text-black">
                  Criou a primeira Casa de Marcas e Marketing do Brasil a unir a
                  filosofia japonesa a um método autoral que transforma estratégia
                  em impacto real.
                </p>
              </div>

              {/* Quote */}
              <motion.div
                className="mt-8 md:mt-16 pl-6 md:pl-8 border-l-4 border-trio-red"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <p className="text-lg md:text-2xl text-black/80 italic">
                  "Aqui, cada marca é tratada como uma obra em construção:
                  intencional, estratégica e memorável."
                </p>
                <p className="text-trio-red mt-4 font-bold">— Luana Anttoni</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Statement - Large Typography */}
      <motion.div
        className="relative min-h-[60vh] md:min-h-[50vh] lg:min-h-screen flex items-center justify-center mt-12 md:mt-16 lg:mt-32"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="text-center max-w-6xl mx-auto px-8">
          <motion.h3
            className="section-title text-black leading-[0.85]"
            style={{ scale }}
          >
            SOMOS A CASA<br/>
            ONDE <span className="text-trio-red">DESIGN</span><br/>
            ENCONTRA<br/>
            <span className="text-outline-black">ESTRATÉGIA</span>
          </motion.h3>

          <motion.p
            className="text-2xl text-black/60 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Onde dados conversam com emoção.<br/>
            Onde marcas ganham alma e resultados.
          </motion.p>
        </div>

        {/* Background Japanese Character */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40rem] text-black/5"
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        >
          創
        </motion.div>
      </motion.div>
    </section>
  )
}