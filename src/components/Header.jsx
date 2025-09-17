import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#inicio" className="text-2xl font-bold text-primary">
              Estudio Arquitectura
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-text hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Agendar consulta
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                    className="block text-text hover:text-accent transition-colors duration-300 font-medium text-lg"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block btn-primary mt-4"
                >
                  Agendar consulta
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
