<<<<<<< HEAD
# 🐾 Patitas Felices — Landing Page Template

Template HTML/Bootstrap listo para personalizar para clínicas veterinarias.

![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)
![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-custom-1572B6?logo=css3)
![JS](https://img.shields.io/badge/JS-vanilla-F7DF1E?logo=javascript)

---

## 📋 Contenido

- [Demo rápida](#-demo-rápida)
- [Características](#-características)
- [Estructura de carpetas](#-estructura-de-carpetas)
- [Cómo usar](#-cómo-usar)
- [Cómo personalizar](#-cómo-personalizar)
- [Páginas incluidas](#-páginas-incluidas)
- [Stack técnico](#-stack-técnico)
- [Navegadores soportados](#-navegadores-soportados)
- [Créditos](#-créditos)

---

## 🚀 Demo rápida

No requiere instalación ni build. Solo abre `index.html` en cualquier navegador moderno.

```bash
# Opción 1 — clic doble sobre index.html
# Opción 2 — servidor local (recomendado para el formulario)
npx serve .
# o
python -m http.server 8000
```

Luego visita: **http://localhost:8000**

---

## ✨ Características

- ✅ **Bootstrap 5.3.3** vía CDN (sin build ni npm install)
- ✅ **Bootstrap Icons** (iconografía completa)
- ✅ **Google Fonts — Poppins** (300, 400, 500, 600, 700)
- ✅ **7 páginas completas** listas para producción
- ✅ **Navbar sticky** con efecto glass al hacer scroll
- ✅ **Mobile-first** y 100% responsive
- ✅ **Animaciones nativas** con IntersectionObserver + CSS keyframes
- ✅ **Mock data centralizado** en `assets/js/data.js`
- ✅ **Formulario de contacto** con validación y modal de éxito
- ✅ **Modal de servicios** dinámico (una sola pieza de HTML)
- ✅ **Mapa** Google Maps embed responsive
- ✅ **Páginas legales** con tabla de contenidos sticky
- ✅ **Footer** idéntico en todas las páginas
- ✅ **Botón "Volver arriba"** con auto show/hide
- ✅ **Botón CTA "Agendar cita"** destacado en navbar
- ✅ **Año dinámico** en el copyright (auto-update)
- ✅ **Easter egg**: favicon 🐾 en SVG inline

---

## 📁 Estructura de carpetas

```
veterinaria-01/
│
├── index.html                  # Pantalla de inicio (Hero)
├── nosotros.html               # Sobre nosotros + equipo
├── servicios.html              # Servicios + modal detalle
├── precios.html                # Planes + lista detallada + FAQ
├── contacto.html               # Formulario + mapa + horarios
├── privacidad.html             # Aviso de privacidad (LFPDPPP)
├── terminos.html               # Términos y condiciones
│
├── README.md                   # Este archivo
│
└── assets/
    ├── css/
    │   └── styles.css          # Tema personalizado verde menta
    ├── js/
    │   ├── data.js             # Mock data centralizada
    │   └── main.js             # Interacciones (scroll, form, modal, etc.)
    └── img/                    # Vacío (todo via Unsplash CDN)
```

---

## 🛠 Cómo usar

### 1. Reemplazar el contenido de muestra

Toda la información personalizable está centralizada en **`assets/js/data.js`**. Edita este único archivo para cambiar:

| Variable        | Contenido                                                  |
|-----------------|------------------------------------------------------------|
| `VET_INFO`      | Nombre, teléfono, email, dirección, horarios, mapa         |
| `SERVICIOS`     | Array de 8 servicios (nombre, descripción, precio, icono)  |
| `EQUIPO`        | Array de 4 veterinarios (nombre, cargo, foto, bio)         |
| `TESTIMONIOS`   | Array de 3 reseñas de clientes                             |
| `PLANES`        | Array de 3 planes mensuales                                |
| `PRECIOS_TABLA` | Array de categorías con sus items                          |
| `FAQ`           | Array de 6 preguntas frecuentes                           |
| `ESTADISTICAS`  | Array de 4 contadores animados                            |
| `HISTORIA`      | Array de 5 hitos para el timeline                         |

### 2. Cambiar colores del tema

Edita las variables CSS en la parte superior de `assets/css/styles.css`:

```css
:root {
  --mint-500: #10b981;   /* Color primario */
  --mint-600: #059669;   /* Hover/active */
  --mint-700: #047857;   /* Footer, texto */
  --accent:  #fbbf24;    /* Acento (ctas secundarios) */
  ...
}
```

Cambia esos 4 valores para adaptarlo a tu marca.

### 3. Cambiar imágenes

Las imágenes vienen de **Unsplash** vía URL. Para reemplazarlas, edita los campos `imagen` y `foto` en `data.js`, o usa imágenes locales en `assets/img/` y reemplaza los `src="https://images.unsplash.com/..."` por `src="assets/img/mi-foto.jpg"`.

### 4. Personalizar textos legales

Edita directamente el contenido en `privacidad.html` y `terminos.html`. Ambos siguen el formato LFPDPPP mexicano pero **deben ser revisados por un abogado** antes de uso en producción.

### 5. Conectar el formulario a un backend real

En `assets/js/main.js`, la función del formulario actualmente simula el envío con un `setTimeout`. Reemplaza el bloque dentro de `setTimeout(...)` por una llamada real (`fetch('/api/contacto', ...)`).

---

## 📄 Páginas incluidas

| Página              | Ruta               | Contenido principal                                        |
|---------------------|--------------------|------------------------------------------------------------|
| **Inicio**          | `index.html`       | Hero animado, 4 servicios destacados, 4 stats counters, nosotros preview, 3 testimonios carousel, CTA |
| **Nosotros**        | `nosotros.html`    | Intro, misión/visión/valores, timeline 5 hitos, 4 equipo |
| **Servicios**       | `servicios.html`   | Grid 8 servicios + modal detalle, 4 features cards        |
| **Precios**         | `precios.html`     | 3 planes mensuales (highlight), tabla 16 servicios, FAQ    |
| **Contacto**        | `contacto.html`    | Banner emergencia, formulario validado, info card, Google Maps, FAQ |
| **Privacidad**      | `privacidad.html`  | Aviso LFPDPPP con 10 secciones + TOC sticky                |
| **Términos**        | `terminos.html`    | 11 secciones legales + TOC sticky                          |

---

## 💻 Stack técnico

- **HTML5 semántico** — header, nav, main, section, article, footer
- **CSS3** — custom properties, grid, flexbox, keyframes, transitions
- **Bootstrap 5.3.3** — layout, utilidades, navbar, modal, accordion, carousel, toast
- **Bootstrap Icons 1.11** — 2000+ iconos
- **JavaScript vanilla** — sin frameworks ni librerías extra
- **IntersectionObserver API** — animaciones de scroll
- **FormValidation API** — validación nativa del navegador
- **CSS aspect-ratio** — contenedor de imagen hero

---

## 🌐 Navegadores soportados

Navegadores modernos (últimas 2 versiones):

- ✅ Chrome / Edge / Brave
- ✅ Firefox
- ✅ Safari (incluido iOS)
- ✅ Opera

Usa graceful degradation para `IntersectionObserver` (carga elementos visibles si la API no está disponible).

---

## 📦 Tamaño total

```
HTML: ~98 KB total (7 páginas)
CSS:   22 KB (sin minificar)
JS:    18 KB (sin minificar)
─────────────────────────────
Total sin dependencias: ~138 KB
+ Bootstrap CDN:        ~250 KB (gzipped, cacheable)
+ Google Fonts:         ~30 KB  (gzipped, cacheable)
+ Unsplash imágenes:    cargadas lazy, on-demand
```

---

## 🎨 Tema visual

**Paleta principal — Verde menta:**

| Tono    | Hex       | Uso                                  |
|---------|-----------|--------------------------------------|
| 50      | `#ecfdf5` | Backgrounds suaves                   |
| 100     | `#d1fae5` | Badges, cards light                  |
| 300     | `#6ee7b7` | Borders hover                        |
| 500     | `#10b981` | Color primario (botones, links)      |
| 600     | `#059669` | Hover primario                       |
| 700     | `#047857` | Texto headings                       |
| 800     | `#065f46` | Texto sobre blanco                   |
| 900     | `#064e3b` | Footer                               |

**Acento:** `#fbbf24` (amber-400) — CTA secundario y badges destacados.

---

## ✏️ Personalización rápida — Cheatsheet

```js
// data.js — Cambiar info básica
VET_INFO.nombre = 'Mi Veterinaria';
VET_INFO.telefono = '+52 55 0000 0000';
VET_INFO.direccion = 'Mi dirección...';
VET_INFO.horarios = [...];

// Agregar un servicio nuevo
SERVICIOS.push({
  id: 'nuevo-servicio',
  nombre: 'Mi nuevo servicio',
  descripcion: 'Descripción completa...',
  descripcionCorta: 'Descripción corta...',
  icono: 'bi-star-fill',
  imagen: 'https://images.unsplash.com/...',
  precioDesde: 500
});

// Agregar un miembro del equipo
EQUIPO.push({
  nombre: 'Dr. Nuevo',
  cargo: 'Especialista',
  especialidad: 'X',
  bio: '...',
  foto: 'https://...'
});
```

---

## 📜 Licencia

Este template es de uso libre para proyectos comerciales y personales. Las imágenes cargan desde Unsplash (verifica su licencia en [unsplash.com/license](https://unsplash.com/license)).

---

## 🐶 Créditos

- **Imágenes:** [Unsplash](https://unsplash.com)
- **Framework:** [Bootstrap](https://getbootstrap.com)
- **Iconos:** [Bootstrap Icons](https://icons.getbootstrap.com)
- **Tipografía:** [Poppins por Google Fonts](https://fonts.google.com/specimen/Poppins)

---

> 💡 **Tip:** Antes de desplegar en producción, ejecuta una auditoría de accesibilidad con Lighthouse y reemplaza los textos legales por versiones revisadas por un abogado.
=======
# 🐾 Patitas Felices - Sistema de Reservas Veterinarias

Sistema de gestión de citas y reservas para clínicas veterinarias, desarrollado como un template moderno, responsivo y funcional utilizando tecnologías frontend nativas.

## 🚀 Características Principales

### 🏥 Para el Cliente
- **Reserva Guiada:** Wizard de 5 pasos para agendar citas (Servicio $\rightarrow$ Profesional $\rightarrow$ Mascota $\rightarrow$ Fecha/Hora $\rightarrow$ Confirmación).
- **Gestión de Mascotas:** CRUD de mascotas desde el perfil para agilizar futuras reservas.
- **Historial de Citas:** Visualización de reservas pasadas y futuras con estados en tiempo real (Pendiente, Confirmada, Completada, Anulada).
- **Anulación Inteligente:** Opción de cancelar citas respetando la política de 24 horas de anticipación.
- **Pagos Simulados:** Pasarela de pago integrada con opciones de Yape/Plin, Tarjeta y Efectivo.
- **Perfil de Usuario:** Gestión de datos personales y seguridad (cambio de contraseña).

### 🛠️ Aspectos Técnicos
- **Stack:** HTML5, Tailwind CSS (CDN), JavaScript Vanilla (ES6+).
- **Persistencia:** Uso de `localStorage` para simular una base de datos en el cliente.
- **Diseño:** Tema Dark Premium con paleta Verde Esmeralda, totalmente responsive.
- **Arquitectura:** Estructura modular en `main.js` con separación de responsabilidades (`Auth`, `Reservas`, `Mascotas`, `UI`).

## 📁 Estructura del Proyecto

```text
veterinaria-01/
├── css/
│   └── styles.css           # Estilos personalizados y variables de color
├── js/
│   └── main.js              # Lógica central del sistema (Módulos de negocio)
├── assets/                  # Recursos estáticos (imágenes, iconos)
├── index.html               # Página de inicio
├── services.html            # Catálogo de servicios
├── prices.html              # Lista de precios y paquetes
├── gallery.html             # Galería de instalaciones y equipo
├── schedules.html           # Horarios de atención
├── contact.html             # Formulario de contacto y ubicación
├── booking.html             # Proceso de reserva (Wizard)
├── booking-confirmation.html # Confirmación de reserva
├── payment.html             # Pasarela de pago
├── payment-confirmed.html   # Confirmación de pago
├── profile.html             # Panel de usuario e historial
├── my-bookings.html         # Detalle de reserva y anulación
├── login.html               # Inicio de sesión
├── register.html            # Registro de usuario
├── forgot-password.html     # Recuperación de contraseña
├── terms.html               # Términos y condiciones
└── privacy.html             # Política de privacidad
```

## 🔑 Usuarios de Prueba

Para probar las funcionalidades privadas, puedes utilizar las siguientes credenciales:

| Usuario | Email | Contraseña |
| :--- | :--- | :--- |
| **Juan Pérez** | `juan@test.com` | `123456` |
| **María López** | `maria@test.com` | `123456` |

## 🛠️ Instalación y Uso

No se requiere instalación de servidor ni dependencias externas ya que utiliza CDNs para Tailwind CSS y Google Fonts.

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en cualquier navegador moderno.
3. Inicia sesión con los usuarios de prueba para explorar el área de cliente.

## 🎨 Personalización

Para cambiar la identidad visual, puedes modificar las variables en `css/styles.css`:
- `--color-primary`: Cambia el color principal de la marca.
- `--color-bg-dark`: Modifica el color de fondo del tema oscuro.
- `--color-bg-card`: Cambia el color de los contenedores.
>>>>>>> c65efb7eb789cdd23f58f799a8bf5227022f9948
