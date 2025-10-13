'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section ref={containerRef} id="contato" className="relative min-h-[150vh] bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-trio-red/10 via-transparent to-black" />
        <div className="noise-overlay" />
      </div>

      {/* Large Title - Documentary Style */}
      <div className="relative pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h2 className="display-title text-white/5 absolute left-1/2 top-0 transform -translate-x-1/2 text-center pointer-events-none">
            CONTACT
          </h2>
          <h2 className="section-title text-white relative text-center z-10 pt-8">
            VAMOS<br/>
            <span className="text-trio-red">CRIAR</span><br/>
            <span className="text-outline">JUNTOS?</span>
          </h2>
        </motion.div>
      </div>

      {/* Asymmetric Layout */}
      <div className="relative">
        <div className="grid grid-cols-1 md:asymmetric-grid gap-16 md:gap-0">
          {/* Form Section - Left Side */}
          <motion.div
            className="md:col-span-7 md:col-start-1"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="pl-8 md:pl-16 pr-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-trio-red transition-colors text-lg"
                      placeholder="NOME"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-trio-red transition-colors text-lg"
                      placeholder="EMAIL"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-trio-red transition-colors text-lg"
                    placeholder="EMPRESA"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-trio-red transition-colors resize-none text-lg"
                    placeholder="MENSAGEM"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="relative group overflow-hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-white text-2xl font-bold uppercase tracking-wider">
                    Enviar →
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-trio-red"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - Right Side */}
          <motion.div
            className="md:col-span-5 md:col-start-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="clip-fragment bg-trio-red/10 backdrop-blur-sm p-12 md:p-16">
              <div className="space-y-12">
                {/* Email */}
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Email</p>
                  <p className="text-white text-xl">contato@triolabs.com.br</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Telefone</p>
                  <p className="text-white text-xl">+55 (11) 9999-9999</p>
                </div>

                {/* Location */}
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Localização</p>
                  <p className="text-white text-xl">São Paulo, Brasil</p>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-4">Redes</p>
                  <div className="flex space-x-6">
                    <motion.a
                      href="#"
                      className="text-white hover:text-trio-red transition-colors text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaWhatsapp />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-trio-red transition-colors text-2xl"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-trio-red transition-colors text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Japanese Character */}
            <motion.div
              className="text-9xl text-white/5 font-bold text-right mt-12 pr-8"
              style={{ scale }}
            >
              繋
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Bottom */}
      <motion.div
        className="relative mt-32 mb-16 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <h3 className="text-4xl md:text-7xl font-bold text-white mb-8">
            PRONTO PARA<br/>
            <span className="text-trio-red">TRANSFORMAR</span><br/>
            SUA MARCA?
          </h3>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Entre em contato e inicie sua jornada de transformação
            através do Método Toriê.
          </p>
        </div>
      </motion.div>

      {/* Background Large Text */}
      <motion.div
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[30rem] text-white/5 font-bold leading-none pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [200, 0]) }}
      >
        TRIO
      </motion.div>
    </section>
  )
}