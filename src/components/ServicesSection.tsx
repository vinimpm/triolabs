'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const services = [
  {
    number: "01",
    title: "BRANDING",
    subtitle: "& POSICIONAMENTO",
    description: "Construímos marcas com essência e estratégia para que elas nasçam fortes e cresçam com consistência.",
    details: ["Identidade Visual", "Naming", "Brand Guidelines", "Reposicionamento"],
    color: "text-white"
  },
  {
    number: "02",
    title: "ESTRATÉGIA",
    subtitle: "DE CRESCIMENTO",
    description: "Planejamento que combina ciência, dados e criatividade para gerar resultados reais e mensuráveis.",
    details: ["Marketing Strategy", "Growth Hacking", "Pricing Strategy", "Market Analysis"],
    color: "text-trio-red"
  },
  {
    number: "03",
    title: "CONTEÚDO",
    subtitle: "& COMUNICAÇÃO",
    description: "Histórias que conectam pessoas, dados que geram ação e conteúdo que transforma.",
    details: ["Content Strategy", "Copywriting", "Social Media", "Storytelling"],
    color: "text-white"
  },
  {
    number: "04",
    title: "EXPERIÊNCIA",
    subtitle: "DIGITAL",
    description: "Sites, Landing Pages, Apps e Sistemas que unem design sofisticado, tecnologia de ponta e experiência do usuário.",
    details: ["Sites & Landing Pages", "Apps Mobile (iOS/Android)", "Sistemas Personalizados", "Automação"],
    color: "text-trio-red"
  }
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [200, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="servicos" className="relative min-h-[200vh] bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[url('/brand/TRIO_LABS_HORIZONTAL_PRETO.png')] bg-center bg-no-repeat bg-cover opacity-5" />
      </motion.div>

      {/* Title Section */}
      <div className="relative pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="display-title text-white px-8 md:px-16">
            NOSSOS<br/>
            <span className="text-outline">SERVIÇOS</span>
          </h2>
        </motion.div>
      </div>

      {/* Services Grid - Asymmetric Layout */}
      <div className="relative">
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={index}
              className={`relative min-h-[80vh] md:min-h-[70vh] mb-20 md:mb-32 flex items-center ${
                isEven ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Service Number - Background */}
              <motion.div
                className={`hidden md:block absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2`}
                style={{ y: useTransform(scrollYProgress, [0, 1], [index * 20, index * -20]) }}
              >
                <span className="text-[20rem] font-bold text-white/5 leading-none">
                  {service.number}
                </span>
              </motion.div>

              {/* Service Content */}
              <div className={`relative z-10 w-full max-w-4xl px-4 md:px-0 ${isEven ? 'md:ml-32' : 'md:mr-32'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    isEven ? 'md:clip-angular' : 'md:clip-fragment'
                  } bg-zinc-800/95 backdrop-blur-sm p-14 md:p-24 border border-white/20`}
                >
                  <span className={`text-xs md:text-base ${service.color} uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold`}>
                    {service.number}
                  </span>
                  <h3 className={`text-3xl md:text-6xl font-bold ${service.color} mt-3 mb-2 md:mt-4 md:mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
                    <span className="text-white" style={{
                      WebkitTextStroke: service.color === 'text-white' ? '2px #FF0000' : '2px #FFFFFF',
                      WebkitTextFillColor: 'transparent',
                      textShadow: service.color === 'text-white'
                        ? '2px 2px 0px rgba(255, 0, 0, 0.3)'
                        : '2px 2px 0px rgba(255, 255, 255, 0.3)'
                    }}>{service.subtitle}</span>
                  </p>
                  <p className="text-sm md:text-lg text-white/85 max-w-md mb-10 md:mb-12 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="flex flex-wrap gap-6 md:gap-8 mb-8">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3 min-w-[200px]">
                        <div className="w-2 h-2 bg-trio-red rounded-full flex-shrink-0" />
                        <span className="text-base md:text-lg text-white/90 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-trio-red"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Special Service - Método Toriê */}
      <motion.div
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-trio-red text-sm uppercase tracking-[0.5em]">
              Exclusivo
            </span>
            <h3 className="section-title text-white mt-4">
              CONSULTORIA<br/>
              <span className="text-outline-filled">TORIÊ</span>
            </h3>
            <p className="text-xl text-white/60 mt-8 max-w-2xl mx-auto">
              Uma imersão completa no nosso método proprietário para
              transformar ou reposicionar marcas e negócios.
            </p>
          </motion.div>

          {/* Japanese Symbol */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30rem] text-white/5"
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
          >
            道
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}