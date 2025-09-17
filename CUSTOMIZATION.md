# Guía de Personalización

## 🎨 Personalización de Colores

Para cambiar la paleta de colores, edita el archivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#111827',    // Color principal
      secondary: '#9CA3AF',  // Color secundario
      accent: '#E07A5F',     // Color de acento
      text: '#1E293B',       // Color de texto
    }
  }
}
```

## 📝 Personalización de Contenido

### Información de Contacto
Edita el archivo `src/config/constants.js` para cambiar:
- Email de contacto
- Teléfono
- Dirección
- Enlaces de redes sociales

### Proyectos del Portfolio
Modifica el array `projects` en `src/sections/Portfolio.jsx`:
- Agrega o elimina proyectos
- Cambia las imágenes (URLs de Unsplash)
- Actualiza títulos y descripciones

### Servicios
Edita el array `services` en `src/sections/Services.jsx`:
- Modifica los servicios ofrecidos
- Cambia iconos (usando Lucide React)
- Actualiza descripciones y características

## 🖼️ Imágenes

### Hero Background
Cambia la imagen de fondo en `src/sections/Hero.jsx`:
```jsx
<div className="w-full h-full bg-[url('TU_IMAGEN_AQUI')] bg-cover bg-center bg-no-repeat"></div>
```

### Imagen del Arquitecto
Actualiza la imagen en `src/sections/About.jsx`:
```jsx
<img
  src="TU_IMAGEN_AQUI"
  alt="Arquitecto profesional"
  className="w-full h-[500px] object-cover"
/>
```

## 🎭 Animaciones

### Velocidad de Animaciones
Modifica las duraciones en los componentes:
```jsx
transition={{ duration: 0.8 }} // Cambia 0.8 por el valor deseado
```

### Efectos Hover
Personaliza los efectos hover en `src/index.css`:
```css
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
```

## 📱 Responsive Design

### Breakpoints
Los breakpoints de Tailwind son:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Ajustes Móviles
Para ajustar el diseño móvil, modifica las clases responsive en cada componente.

## 🚀 Optimizaciones

### Imágenes
- Usa imágenes optimizadas (WebP cuando sea posible)
- Implementa lazy loading para mejor rendimiento
- Considera usar un CDN para imágenes

### SEO
- Actualiza meta tags en `index.html`
- Agrega structured data si es necesario
- Optimiza las imágenes con alt text descriptivos

## 📦 Agregar Nuevas Secciones

1. Crea el componente en `src/sections/`
2. Importa y agrega en `src/App.jsx`
3. Actualiza la navegación en `src/components/Header.jsx`

## 🎨 Temas Personalizados

Para crear un tema oscuro:
1. Agrega clases dark: en Tailwind
2. Crea variables CSS para colores
3. Implementa un toggle de tema

## 📊 Analytics

Para agregar Google Analytics:
1. Instala `react-ga4`
2. Configura en `src/main.jsx`
3. Agrega eventos de tracking

## 🔧 Configuración Avanzada

### Variables de Entorno
Crea un archivo `.env.local`:
```
VITE_APP_EMAIL=tu@email.com
VITE_APP_PHONE=+1234567890
```

### API Integration
Para conectar con una API:
1. Instala `axios` o usa `fetch`
2. Crea servicios en `src/services/`
3. Implementa manejo de estado con `useState` o `useReducer`
