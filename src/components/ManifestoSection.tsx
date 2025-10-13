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
    <section ref={containerRef} id="manifesto" className="relative min-h-[150vh] overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-trio-red/20 via-transparent to-trio-red/10" />
      </div>

      {/* Asymmetric Grid */}
      <div className="relative asymmetric-grid min-h-screen">
        {/* Large Statement 1 - Top Left */}
        <motion.div
          className="col-span-8 col-start-1 pt-32"
          style={{ y: y1 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="display-title text-white leading-[0.8] pl-8 md:pl-16">
              NÃO<br/>
              <span className="text-outline">NASCEMOS</span><br/>
              <span className="text-trio-red">PARA</span><br/>
              AGRADAR
            </h2>
          </motion.div>
        </motion.div>

        {/* Floating Text Block - Right */}
        <motion.div
          className="col-span-5 col-start-8 pt-32 px-6 md:px-0"
          style={{ y: y2 }}
        >
          <div className="md:clip-fragment bg-trio-red p-12 md:p-12">
            <p className="text-white text-base md:text-2xl font-bold uppercase leading-relaxed">
              Provocar suor.<br/>
              Pulsar desejo.<br/>
              Causar desconforto.
            </p>
          </div>
        </motion.div>

        {/* Central Image/Video Area */}
        <motion.div
          className="col-span-12 relative h-[80vh] mt-32"
          style={{ scale }}
        >
          <div className="absolute inset-0 clip-angular bg-gradient-to-b from-transparent to-black">
            <div className="absolute inset-0 bg-[url('/brand/TRIO_LABS_ICONE_PRETO.png')] bg-center bg-no-repeat bg-contain opacity-5" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2 }}
                className="text-center"
              >
                <h3 className="section-title text-white mb-8">
                  SOMOS A<br/>
                  <span className="text-outline-filled">TRÍADE</span><br/>
                  DA RUPTURA
                </h3>
                <div className="flex justify-center space-x-8 text-white/60 text-lg">
                  <span>Neurobranding</span>
                  <span className="text-trio-red">•</span>
                  <span>Posicionamento</span>
                  <span className="text-trio-red">•</span>
                  <span>Presença</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Statements - Expanded */}
        <div className="col-span-12 mt-32">
          <motion.div
            className="max-w-7xl mx-auto px-8 md:px-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
              <div className="bg-zinc-900/50 p-8 border-l-4 border-trio-red">
                <h4 className="text-2xl md:text-3xl text-trio-red font-bold mb-4">
                  Ousar não é risco.
                </h4>
                <p className="text-white/80 text-lg md:text-xl">
                  É estratégia.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-8 border-l-4 border-white">
                <h4 className="text-2xl md:text-3xl text-white font-bold mb-4">
                  Ser profundo não é confuso.
                </h4>
                <p className="text-white/80 text-lg md:text-xl">
                  É autoridade.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-8 border-l-4 border-trio-red">
                <h4 className="text-2xl md:text-3xl text-trio-red font-bold mb-4">
                  Ser você não é aleatório.
                </h4>
                <p className="text-white/80 text-lg md:text-xl">
                  É poder.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Manifesto Content */}
        <motion.div
          className="col-span-12 mt-24 px-8 md:px-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-black/40 p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-6">
              A Triô é pra quem tem coragem
            </h3>
            <div className="space-y-4 text-white/70 text-lg">
              <p>Pra quem quer <span className="text-trio-red font-semibold">virar o jogo da própria marca</span>.</p>
              <p>Pra quem quer <span className="text-white font-semibold">parar de parecer e começar a ser</span>.</p>
              <p>Pra quem prefere <span className="text-trio-red font-semibold">ser lembrado a ser aceito</span>.</p>
              <p className="text-white/50 text-base italic mt-6">
                Posicionar é um ato de coragem — e também de prazer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="col-span-12 mt-32 mb-32 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="display-title text-white/10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              TRIÔ
            </h3>
            <div className="relative z-10">
              <p className="text-4xl text-white mb-4">
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
          className="absolute top-32 right-16 text-9xl text-white/5 hidden lg:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          魂
        </motion.div>
        <motion.div
          className="absolute bottom-64 left-16 text-9xl text-white/5 hidden lg:block pointer-events-none"
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