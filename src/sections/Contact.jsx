import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Diseño de Interiores',
    'Arquitectura Residencial',
    'Arquitectura Comercial',
    'Remodelación',
    'Consultoría',
    'Otro'
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Selecciona un tipo de proyecto'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              ¡Mensaje Enviado!
            </h2>
            <p className="text-lg text-text mb-8">
              Gracias por contactarnos. Te responderemos en las próximas 24 horas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Enviar otro mensaje
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            ¿Tienes una idea en mente? Cuéntanos sobre tu proyecto y trabajemos juntos 
            para hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-text">info@estudioarquitectura.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Teléfono</h4>
                    <p className="text-text">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Ubicación</h4>
                    <p className="text-text">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-primary mb-4">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3 text-text">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  Consulta inicial gratuita
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  Diseños personalizados
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  Seguimiento completo del proyecto
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  Garantía de satisfacción
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
                  Tipo de proyecto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.projectType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un tipo</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
