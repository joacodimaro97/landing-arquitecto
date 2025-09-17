import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Casa Moderna Minimalista',
      category: 'Arquitectura Residencial',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Diseño contemporáneo con líneas limpias y espacios amplios'
    },
    {
      id: 2,
      title: 'Oficina Corporativa',
      category: 'Arquitectura Comercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Espacio de trabajo funcional y moderno'
    },
    {
      id: 3,
      title: 'Interiorismo Residencial',
      category: 'Diseño de Interiores',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ambientes cálidos y acogedores'
    },
    {
      id: 4,
      title: 'Remodelación Integral',
      category: 'Remodelaciones',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Transformación completa de espacios existentes'
    },
    {
      id: 5,
      title: 'Casa de Lujo',
      category: 'Arquitectura Residencial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Diseño exclusivo con acabados de alta gama'
    },
    {
      id: 6,
      title: 'Restaurante Gourmet',
      category: 'Arquitectura Comercial',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ambiente sofisticado para experiencia culinaria'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="proyectos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            Cada proyecto es una historia única de transformación, donde la funcionalidad 
            se encuentra con la belleza para crear espacios excepcionales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-white text-sm font-bold uppercase tracking-wide drop-shadow-lg">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 mt-1 text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm mb-4 drop-shadow-md">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                    >
                      <Eye size={16} />
                      Ver más
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/50 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors shadow-lg"
                    >
                      <ExternalLink size={16} />
                      Detalles
                    </motion.button>
                  </div>
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
          className="text-center mt-12"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Ver todos los proyectos
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
