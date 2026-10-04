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
