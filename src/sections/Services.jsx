import React from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, Palette, Wrench, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Diseño de Interiores',
      description: 'Transformamos espacios interiores creando ambientes únicos que reflejan tu personalidad y estilo de vida.',
      features: ['Consultoría de diseño', 'Selección de materiales', 'Iluminación personalizada', 'Decoración completa']
    },
    {
      icon: <Building2 size={48} />,
      title: 'Arquitectura Residencial',
      description: 'Diseñamos casas y viviendas que combinan funcionalidad, estética y sostenibilidad.',
      features: ['Diseño arquitectónico', 'Planos técnicos', 'Gestión de permisos', 'Supervisión de obra']
    },
    {
      icon: <Building2 size={48} />,
      title: 'Arquitectura Comercial',
      description: 'Creamos espacios comerciales que potencian la experiencia del cliente y la productividad.',
      features: ['Oficinas corporativas', 'Locales comerciales', 'Restaurantes', 'Espacios de coworking']
    },
    {
      icon: <Wrench size={48} />,
      title: 'Remodelaciones',
      description: 'Renovamos y modernizamos espacios existentes para adaptarlos a nuevas necesidades.',
      features: ['Análisis estructural', 'Diseño de renovación', 'Gestión de obra', 'Acabados personalizados']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en arquitectura e interiorismo, 
            desde el concepto inicial hasta la entrega final del proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group card p-8 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-text">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors duration-300"
                  >
                    Conocer más
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Agendemos una consulta gratuita para discutir tus ideas y necesidades.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Agendar consulta gratuita
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
