import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Calendar, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '8', label: 'Años de Experiencia' },
    { number: '100%', label: 'Clientes Satisfechos' },
    { number: '15', label: 'Premios Recibidos' }
  ]

  const achievements = [
    'Arquitecto certificado por el Colegio de Arquitectos',
    'Especialización en diseño sostenible y eficiencia energética',
    'Experiencia internacional en proyectos residenciales y comerciales',
    'Colaboraciones con marcas reconocidas del sector'
  ]

  return (
    <section id="sobre-mi" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Arquitecto profesional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center">
              <Award className="text-white" size={32} />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Sobre Mí
              </h2>
              <p className="text-lg text-text leading-relaxed mb-6">
                Soy un arquitecto apasionado por crear espacios que no solo son funcionales, 
                sino que también inspiran y mejoran la calidad de vida de quienes los habitan. 
                Con más de 8 años de experiencia, he tenido el privilegio de trabajar en 
                proyectos diversos que van desde viviendas unifamiliares hasta complejos comerciales.
              </p>
              <p className="text-lg text-text leading-relaxed">
                Mi enfoque se centra en la sostenibilidad, la innovación y la atención al detalle, 
                siempre buscando el equilibrio perfecto entre estética y funcionalidad.
              </p>
            </div>

            {/* Logros */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Logros Profesionales</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-text">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Trabajemos juntos
                <Users size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
