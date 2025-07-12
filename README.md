# 📋 Interfaz Interactiva con Persistencia de Datos

## 📖 Descripción

Esta es una aplicación web moderna que permite a los usuarios capturar, almacenar y gestionar información personal (nombre y edad) utilizando tecnologías web estándar. La aplicación incluye persistencia de datos mediante Local Storage y Session Storage, con una interfaz de usuario moderna y responsiva.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz con gradientes, efectos glassmorphism y animaciones suaves
- 💾 **Persistencia de Datos**: Almacenamiento local usando Local Storage
- 📊 **Contador de Sesión**: Seguimiento de interacciones usando Session Storage
- 📱 **Diseño Responsivo**: Optimizado para dispositivos móviles y de escritorio
- 🔔 **Notificaciones**: Sistema de alertas elegante para feedback del usuario
- ⚡ **Validación en Tiempo Real**: Verificación de datos antes del almacenamiento

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con gradientes, animaciones y diseño responsivo
- **JavaScript ES6+**: Funcionalidad interactiva y manejo de datos
- **Local Storage**: Persistencia de datos del usuario
- **Session Storage**: Contador de interacciones por sesión

## 📁 Estructura del Proyecto

```
Data-persistance/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos y diseño
├── js/
│   └── script.js       # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requiere servidor web (funciona localmente)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/Sam-SSD/Data-persistance.git
   ```
   ```
   cd Data-persistance
   ```

2. **Abrir la aplicación**
   - Abrir el archivo `index.html` en tu navegador web
   - O usar un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (si tienes http-server instalado)
     npx http-server
     ```

3. **Acceder a la aplicación**
   - Navegar a `http://localhost:8000` (si usas servidor local)
   - O simplemente abrir `index.html` directamente

## 📖 Guía de Uso

### Funcionalidades Principales

#### 1. **Captura de Datos**
- Ingresa tu nombre en el campo "Nombre"
- Ingresa tu edad en el campo "Edad" (1-120 años)
- Presiona "Guardar Datos" o usa la tecla Enter

#### 2. **Visualización de Datos**
- Los datos guardados se muestran en la sección "Datos Almacenados"
- El contador de interacciones se actualiza automáticamente
- Los datos persisten entre sesiones del navegador

#### 3. **Gestión de Datos**
- Usa "Limpiar Datos" para eliminar la información almacenada
- El contador de sesión se reinicia al cerrar el navegador

### Características de la Interfaz

- **Diseño Responsivo**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Animaciones Suaves**: Transiciones elegantes en todos los elementos
- **Feedback Visual**: Notificaciones toast para confirmar acciones
- **Validación Inteligente**: Verificación de datos en tiempo real

## 🔧 Configuración y Personalización

### Modificar Estilos

Los estilos se encuentran en `css/styles.css`. Puedes personalizar:

- **Colores**: Modificar las variables de color en los gradientes
- **Tipografía**: Cambiar la fuente principal en `body`
- **Animaciones**: Ajustar duraciones y efectos en las transiciones
- **Layout**: Modificar el ancho máximo del contenedor

### Agregar Funcionalidades

El archivo `js/script.js` contiene toda la lógica. Puedes:

- Agregar nuevos campos de datos
- Implementar validaciones adicionales
- Crear nuevas funcionalidades de persistencia
- Integrar con APIs externas

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Computadoras de escritorio
- ✅ Tablets
- ✅ Smartphones
- ✅ Dispositivos táctiles

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Los datos no se guardan**
   - Verificar que el navegador soporte Local Storage
   - Comprobar que no esté en modo incógnito
   - Revisar la consola del navegador para errores

2. **Los estilos no se cargan**
   - Verificar que el archivo `css/styles.css` existe
   - Comprobar la ruta del archivo en `index.html`

3. **La aplicación no funciona en móvil**
   - Verificar que el viewport esté configurado correctamente
   - Probar en diferentes navegadores móviles

### Debugging

Para debugging, abre las herramientas de desarrollador (F12):
- **Console**: Ver logs y errores de JavaScript
- **Application**: Ver datos en Local Storage y Session Storage
- **Elements**: Inspeccionar la estructura HTML y CSS

## 📈 Mejoras Futuras

### Funcionalidades Planificadas
- [ ] Exportar datos a CSV/JSON
- [ ] Múltiples perfiles de usuario
- [ ] Sincronización en la nube
- [ ] Temas personalizables
- [ ] Modo oscuro/claro
- [ ] Historial de cambios

### Optimizaciones Técnicas
- [ ] Implementar Service Workers para offline
- [ ] Agregar PWA capabilities
- [ ] Optimizar rendimiento
- [ ] Implementar tests automatizados

## 👥 Contribución

### Cómo Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Estándares de Código

- Usar indentación consistente (2 espacios)
- Comentar funciones complejas
- Seguir convenciones de nomenclatura
- Mantener el código limpio y legible

---

## 🎯 Objetivos de Aprendizaje

Este proyecto demuestra:

- ✅ Manipulación del DOM
- ✅ Persistencia de datos en el navegador
- ✅ Diseño responsivo moderno
- ✅ Validación de formularios
- ✅ Manejo de eventos
- ✅ Animaciones CSS
- ✅ UX/UI moderno

