import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const services = [
    'Diseño de Interiores',
    'Arquitectura Residencial',
    'Arquitectura Comercial',
    'Remodelaciones',
    'Consultoría'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' }
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold mb-4">Estudio Arquitectura</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creamos espacios únicos que combinan funcionalidad, estética y sostenibilidad. 
                Tu visión, nuestro expertise.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Servicios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  <span className="text-gray-300">info@estudioarquitectura.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent flex-shrink-0" />
                  <span className="text-gray-300">Ciudad, País</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Estudio Arquitectura. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Términos de Servicio
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
