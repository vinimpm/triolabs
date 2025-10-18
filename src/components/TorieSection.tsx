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
        </motion.div>
      </div>

      {/* Manifesto Section - Asymmetric Layout */}
      <div className="relative py-12 md:py-24">
        <div className="asymmetric-grid max-w-7xl mx-auto px-8 md:px-16">
          {/* Main Title - Full Width */}
          <motion.div
            className="col-span-12 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="display-title text-white leading-[0.9] mb-8">
              O MÉTODO<br/>
              <span className="text-trio-red">TORIÊ</span><br/>
              <span className="text-outline">A RUPTURA</span><br/>
              NECESSÁRIA
            </h3>
            <div className="max-w-lg">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-6">
                Não é sobre aprender mais.
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                É sobre lembrar o que a sua marca é antes de ter sido moldada.
              </p>
            </div>
          </motion.div>

          {/* Left - First Text Block */}
          <motion.div
            className="col-span-12 md:col-span-8 md:col-start-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="md:clip-angular bg-zinc-800/50 p-8 md:p-12 border-l-4 border-trio-red">
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6">
                O Método Toriê nasce da inquietude — da recusa em aceitar padrões, fórmulas prontas e discursos que esvaziam significado.
                Ele é uma experiência viva, um mergulho profundo naquilo que é autêntico, potente e verdadeiro em cada marca — pessoal ou corporativa.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Aqui, não buscamos aperfeiçoar o que o mercado espera de você.
                <span className="text-trio-red font-semibold"> Buscamos reacender o que o mundo tentou apagar.</span>
              </p>
            </div>
          </motion.div>

          {/* Right - Impact Card (Zigzag) */}
          <motion.div
            className="col-span-12 md:col-span-6 md:col-start-7 mt-8 md:mt-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="md:clip-fragment bg-trio-red p-10 md:p-16">
              <div className="text-white text-xl md:text-3xl font-bold uppercase space-y-4">
                <p>A Trio não ensina.</p>
                <p>Provoca.</p>
                <p>Desconstrói.</p>
                <p>Reconstrói.</p>
              </div>
            </div>
          </motion.div>

          {/* Left - Second Text Block (Zigzag) */}
          <motion.div
            className="col-span-12 md:col-span-9 md:col-start-1 mt-8 md:mt-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="md:clip-angular bg-zinc-800/50 p-8 md:p-12 border-l-4 border-trio-red">
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6">
                O Método Toriê é a fagulha que transforma estratégia em identidade —
                da imagem à essência, da comunicação ao posicionamento,
                da presença ao propósito.
              </p>
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                É um convite à coragem de ser inteiro.
                De sustentar uma marca viva, coerente e inegociável.
                <br/><span className="text-white font-semibold">Sem verniz. Sem roteiro. Sem medo.</span>
              </p>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            className="col-span-12 mt-12 md:mt-24 mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-2xl md:text-4xl text-trio-red font-bold">
              O Método Toriê: onde marcas se encontram pela primeira vez.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Steps - Documentary Style - Centered with Zigzag */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="space-y-12 md:space-y-8">
          {/* Step 01 - Imersão */}
          <motion.div
            className="w-full md:w-4/5 md:ml-0 md:mr-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative md:clip-angular bg-zinc-800/95 border-l-4 border-trio-red p-16 md:py-24 md:pl-12 md:pr-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-white/20 font-bold absolute top-8 left-12 md:top-16 md:left-12">01</span>
              <div className="relative z-10 pt-12 md:pt-20">
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
              <span className="text-6xl md:text-8xl text-trio-red/20 font-bold absolute top-4 right-12 md:top-8 md:right-16">02</span>
              <div className="relative z-10 md:text-right pt-12">
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
            <div className="relative md:clip-angular bg-zinc-800/95 border-l-4 border-trio-red p-16 md:py-24 md:pl-12 md:pr-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-white/20 font-bold absolute top-8 left-12 md:top-16 md:left-12">03</span>
              <div className="relative z-10 pt-12 md:pt-20">
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
            className="w-full md:w-4/5 md:ml-auto md:mr-0 mb-16 md:mb-32"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative md:clip-fragment bg-zinc-800/95 border-r-4 border-trio-red p-16 md:p-24 overflow-hidden">
              <span className="text-6xl md:text-8xl text-trio-red/20 font-bold absolute top-4 right-12 md:top-8 md:right-16">04</span>
              <div className="relative z-10 md:text-right pt-12">
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
        className="relative min-h-[50vh] flex items-center justify-center mt-16 md:mt-32"
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