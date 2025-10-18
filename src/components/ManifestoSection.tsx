'use client'

import React from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={containerRef} id="manifesto" className="relative min-h-[150vh] overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-trio-red/20 via-transparent to-trio-red/10" />
      </div>

      {/* Asymmetric Grid */}
      <div className="relative asymmetric-grid">
        {/* Large Statement 1 - Top Left */}
        <motion.div
          className="col-span-8 col-start-1 pt-8 md:pt-16 relative z-20"
          style={{ y: y1 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="display-title text-black leading-[0.8] pl-8 md:pl-16">
              NÃO<br/>
              <span className="text-outline-black">NASCEMOS</span><br/>
              <span className="text-trio-red">PARA</span><br/>
              AGRADAR
            </h2>
          </motion.div>
        </motion.div>

        {/* Floating Text Block - Right */}
        <motion.div
          className="col-span-7 col-start-6 md:col-span-5 md:col-start-7 pt-32 md:pt-24 px-4 md:px-0 relative z-10"
          style={{ y: y2 }}
        >
          <div className="md:clip-fragment bg-trio-red p-10 md:py-14 md:px-20 flex items-center">
            <div className="text-white text-xs md:text-2xl font-bold uppercase leading-relaxed space-y-1 md:space-y-3 w-full">
              <p>Provocar suor.</p>
              <p>Pulsar desejo.</p>
              <p>Causar desconforto.</p>
            </div>
          </div>
        </motion.div>

        {/* Central Image/Video Area */}
        <motion.div
          className="col-span-12 relative h-[60vh] md:h-[70vh] mt-8 md:mt-32"
          style={{ scale }}
        >
          <div className="absolute inset-0 clip-angular bg-gradient-to-b from-transparent to-black">
            <div className="absolute inset-0 bg-[url('/brand/TRIO_LABS_ICONE_PRETO.png')] bg-center bg-no-repeat bg-contain opacity-5" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2 }}
                className="text-center"
              >
                <h3 className="section-title text-black mb-8">
                  SOMOS A<br/>
                  <span className="text-outline-filled-black">TRÍADE</span><br/>
                  DA RUPTURA
                </h3>
                <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-sm md:text-lg px-4">
                  <span className="text-white font-semibold">Neurobranding</span>
                  <span className="text-trio-red">•</span>
                  <span className="text-white font-semibold">Posicionamento</span>
                  <span className="text-trio-red">•</span>
                  <span className="text-white font-semibold">Presença</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Statements - Expanded */}
        <div className="col-span-12 mt-16 md:mt-32">
          <motion.div
            className="max-w-7xl mx-auto px-8 md:px-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
              <div className="bg-zinc-100 p-8 border-l-4 border-trio-red">
                <h4 className="text-2xl md:text-3xl text-trio-red font-bold mb-4">
                  Ousar não é risco.
                </h4>
                <p className="text-black/80 text-lg md:text-xl">
                  É estratégia.
                </p>
              </div>
              <div className="bg-zinc-100 p-8 border-l-4 border-black">
                <h4 className="text-2xl md:text-3xl text-black font-bold mb-4">
                  Ser profundo não é confuso.
                </h4>
                <p className="text-black/80 text-lg md:text-xl">
                  É autoridade.
                </p>
              </div>
              <div className="bg-zinc-100 p-8 border-l-4 border-trio-red">
                <h4 className="text-2xl md:text-3xl text-trio-red font-bold mb-4">
                  Ser você não é aleatório.
                </h4>
                <p className="text-black/80 text-lg md:text-xl">
                  É poder.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Manifesto Content */}
        <motion.div
          className="col-span-12 mt-12 md:mt-24 px-8 md:px-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-zinc-900 p-8 md:p-12 border border-trio-red/30 shadow-2xl shadow-trio-red/10">
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-6 uppercase tracking-wide">
              A Triô é pra quem tem coragem
            </h3>
            <div className="space-y-4 text-lg">
              <p className="text-white/90">
                Pra quem quer <span className="text-trio-red font-semibold tracking-wide">virar o jogo da própria marca</span>.
              </p>
              <p className="text-white/90">
                Pra quem quer <span className="text-white font-semibold tracking-wide">parar de parecer e começar a ser</span>.
              </p>
              <p className="text-white/90">
                Pra quem prefere <span className="text-trio-red font-semibold tracking-wide">ser lembrado a ser aceito</span>.
              </p>
              <div className="mt-6 pt-6 border-t border-trio-red/20">
                <p className="text-white/70 text-base italic" style={{
                  letterSpacing: '0.02em'
                }}>
                  Posicionar é um ato de coragem — e também de prazer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="col-span-12 mt-12 mb-12 md:mt-16 md:mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="display-title text-black/10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              TRIÔ
            </h3>
            <div className="relative z-10">
              <p className="text-4xl text-black mb-4">
                Não somos para todos.
              </p>
              <p className="text-6xl text-trio-red font-bold">
                Somos para quem está pronto.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Japanese Elements - Positioned to not overlap */}
        <motion.div
          className="absolute top-32 right-16 text-9xl text-black/5 hidden lg:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          魂
        </motion.div>
        <motion.div
          className="absolute bottom-64 left-16 text-9xl text-black/5 hidden lg:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          破
        </motion.div>
      </div>
    </section>
  )
}