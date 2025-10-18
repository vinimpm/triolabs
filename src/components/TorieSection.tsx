'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function TorieSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, -15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9])

  return (
    <section ref={containerRef} id="metodo" className="relative min-h-[200vh] bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-trio-red/10 via-transparent to-trio-red/5" />
      </motion.div>

      {/* Title Section - Clean */}
      <div className="relative pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">Método Exclusivo</p>
          <h2 className="section-title text-white">
            TORIÊ
          </h2>
          <p className="text-trio-red text-5xl mt-6 font-bold">鳥居</p>
        </motion.div>
      </div>

      {/* Philosophy Section - Clean Layout */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {/* Left Philosophy - Zen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="text-8xl text-white/20 font-bold mb-4">禅</div>
              </div>
              <h3 className="text-3xl text-white font-bold mb-4">ZEN</h3>
              <p className="text-white/75 text-lg leading-relaxed">
                Equilíbrio e simplicidade em cada decisão estratégica
              </p>
            </motion.div>

            {/* Center Philosophy - Torii */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block bg-trio-red p-6 mb-4">
                <div className="text-7xl text-white font-bold">鳥居</div>
              </div>
              <h3 className="text-3xl text-trio-red font-bold mb-4">TORII</h3>
              <p className="text-white/75 text-lg leading-relaxed">
                Portal de transformação entre o comum e o extraordinário
              </p>
            </motion.div>

            {/* Right Philosophy - Wabi-Sabi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="text-8xl text-white/20 font-bold mb-4">侘寂</div>
              </div>
              <h3 className="text-3xl text-white font-bold mb-4">WABI-SABI</h3>
              <p className="text-white/75 text-lg leading-relaxed">
                A beleza da imperfeição autêntica em cada marca
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Steps - Documentary Style - Centered with Zigzag */}
      <div className="relative mt-32 max-w-6xl mx-auto px-8">
        <div className="space-y-16 md:space-y-8">
          {/* Step 01 - Imersão */}
          <motion.div
            className="w-full md:w-4/5 md:ml-0 md:mr-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative md:clip-angular bg-zinc-800/95 border-l-4 border-trio-red p-16 md:p-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-white/20 font-bold absolute top-8 left-12 md:top-10 md:left-16">01</span>
              <div className="relative z-10 pt-16">
                <h3 className="text-3xl md:text-5xl text-white font-bold mb-3">IMERSÃO</h3>
                <p className="text-trio-red text-xl md:text-2xl mb-6 font-semibold">没入</p>
                <p className="text-white/85 text-base md:text-lg max-w-lg leading-relaxed">
                  Mergulhamos na essência da sua marca, entendendo profundamente
                  sua história, valores e aspirações.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 02 - Descoberta */}
          <motion.div
            className="w-full md:w-4/5 md:ml-auto md:mr-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative md:clip-fragment bg-zinc-800/95 border-r-4 border-trio-red p-16 md:p-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-trio-red/20 font-bold absolute top-8 right-12 md:top-10 md:right-16">02</span>
              <div className="relative z-10 md:text-right pt-16">
                <h3 className="text-3xl md:text-5xl text-trio-red font-bold mb-3">DESCOBERTA</h3>
                <p className="text-white text-xl md:text-2xl mb-6 font-semibold">発見</p>
                <p className="text-white/85 text-base md:text-lg max-w-lg md:ml-auto leading-relaxed">
                  Revelamos insights ocultos através de análise estratégica,
                  pesquisa de mercado e neuromarketing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 03 - Criação */}
          <motion.div
            className="w-full md:w-4/5 md:ml-0 md:mr-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative md:clip-angular bg-zinc-800/95 border-l-4 border-trio-red p-16 md:p-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-white/20 font-bold absolute top-8 left-12 md:top-10 md:left-16">03</span>
              <div className="relative z-10 pt-16">
                <h3 className="text-3xl md:text-5xl text-white font-bold mb-3">CRIAÇÃO</h3>
                <p className="text-trio-red text-xl md:text-2xl mb-6 font-semibold">創造</p>
                <p className="text-white/85 text-base md:text-lg max-w-lg leading-relaxed">
                  Transformamos estratégia em arte, desenvolvendo uma
                  identidade única e memorável.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 04 - Evolução */}
          <motion.div
            className="w-full md:w-4/5 md:ml-auto md:mr-0 mb-32"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative md:clip-fragment bg-zinc-800/95 border-r-4 border-trio-red p-16 md:p-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-trio-red/20 font-bold absolute top-8 right-12 md:top-10 md:right-16">04</span>
              <div className="relative z-10 md:text-right pt-16">
                <h3 className="text-3xl md:text-5xl text-trio-red font-bold mb-3">EVOLUÇÃO</h3>
                <p className="text-white text-xl md:text-2xl mb-6 font-semibold">進化</p>
                <p className="text-white/85 text-base md:text-lg max-w-lg md:ml-auto leading-relaxed">
                  Acompanhamos e otimizamos continuamente, garantindo
                  crescimento sustentável e relevância.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="relative min-h-[50vh] flex items-center justify-center mt-64"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.h3
            className="display-title text-white/10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ scale }}
          >
            TORIÊ
          </motion.h3>
          <div className="relative z-10">
            <p className="text-4xl text-white mb-8">
              Pronto para atravessar o
              <span className="text-trio-red"> portal</span>?
            </p>
            <motion.a
              href="#contato"
              className="inline-block text-white text-xl uppercase tracking-wider border-b-2 border-trio-red pb-2 hover:text-trio-red transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Iniciar Transformação
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}