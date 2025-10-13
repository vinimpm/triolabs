'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#manifesto', label: 'MANIFESTO', number: '01' },
  { href: '#servicos', label: 'SERVIÇOS', number: '02' },
  { href: '#metodo', label: 'MÉTODO', number: '03' },
  { href: '#sobre', label: 'SOBRE', number: '04' },
  { href: '#contato', label: 'CONTATO', number: '05' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          isScrolled
            ? 'bg-black/90 backdrop-blur-md py-4'
            : 'bg-transparent py-8'
        )}
      >
        <div className="px-8 md:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/brand/TRIO_LABS ICONE_BRANCO.png"
                  alt="Trio Labs"
                  width={50}
                  height={50}
                  className={cn(
                    "transition-all duration-300 object-contain",
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  )}
                  priority
                />
                <div className={cn(
                  "font-bold tracking-wider transition-all duration-300",
                  isScrolled ? "text-sm" : "text-base"
                )}>
                  <span className="text-white">TRIÔ</span>
                  <span className="text-trio-red ml-1">LABS</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Minimal Style */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative text-white/60 hover:text-white transition-all duration-300"
                  >
                    <span className="text-xs text-trio-red/80 absolute -top-4 left-0 font-medium">
                      {item.number}
                    </span>
                    <span className="text-sm tracking-[0.2em] uppercase font-medium">
                      {item.label}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[1px] bg-trio-red"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button - Minimal */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 text-white w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-[1px] bg-white mb-1.5 transition-all"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
              />
              <motion.span
                className="block w-6 h-[1px] bg-white mb-1.5 transition-all"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
              />
              <motion.span
                className="block w-6 h-[1px] bg-white transition-all"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Documentary Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-trio-red/20 via-transparent to-trio-red/10" />
            </div>

            <div className="flex flex-col justify-center h-full px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group block py-4"
                  >
                    <div className="flex items-baseline space-x-4">
                      <span className="text-trio-red text-sm">
                        {item.number}
                      </span>
                      <span className="text-white text-4xl font-bold tracking-wider uppercase">
                        {item.label}
                      </span>
                    </div>
                    <motion.div
                      className="h-[1px] bg-white/20 mt-2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Japanese Element */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 right-8 text-6xl text-white/5"
              >
                導
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}