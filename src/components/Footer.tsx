'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-trio-red/50 to-transparent" />

      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-trio-red/5 to-transparent" />
        </div>

        {/* Main Content - Asymmetric Grid */}
        <div className="relative z-10 px-8 md:px-16 py-20">
          <div className="grid grid-cols-1 md:asymmetric-grid gap-12 md:gap-0">
            {/* Brand Section - Large Typography */}
            <motion.div
              className="md:col-span-6 md:col-start-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <Image
                  src="/brand/TRIO_LABS_HORIZONTAL_COM_SLOGAN_BRANCO.png"
                  alt="Trio Labs"
                  width={500}
                  height={200}
                  className="w-full max-w-md h-auto"
                />
              </div>
              <p className="text-white/40 text-sm max-w-sm mb-8">
                A primeira Casa de Marcas e Marketing com alma japonesa.
              </p>
              <p className="text-trio-red text-xl font-bold">
                Ousar não é risco.<br/>
                É estratégia.
              </p>
            </motion.div>

            {/* Quick Links - Minimal Style */}
            <motion.div
              className="md:col-span-3 md:col-start-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-6">
                Navegação
              </p>
              <nav className="space-y-3">
                {['Manifesto', 'Serviços', 'Método', 'Sobre', 'Contato'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="group block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
                    >
                      <span className="inline-block">
                        {item}
                        <motion.span
                          className="inline-block ml-2 text-trio-red opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          →
                        </motion.span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="md:col-span-3 md:col-start-11"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-6">
                Contato
              </p>
              <div className="space-y-3 text-sm text-white/60">
                <p>contato@triolabs.com.br</p>
                <p>São Paulo, Brasil</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-trio-red hover:border-trio-red transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-trio-red hover:border-trio-red transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-trio-red hover:border-trio-red transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20">
            <div className="h-px bg-white/10 mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-white/30 text-xs uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {currentYear} TRIÔ LABS — Todos os direitos reservados
              </motion.p>

              <motion.div
                className="flex items-center space-x-8 text-white/30 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span>鳥居</span>
                <span className="text-trio-red/50">•</span>
                <span>Método Toriê®</span>
                <span className="text-trio-red/50">•</span>
                <span>創造</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <motion.div
          className="hidden md:block absolute bottom-0 right-0 text-[20rem] font-bold text-white/5 leading-none pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          創
        </motion.div>
      </div>
    </footer>
  )
}