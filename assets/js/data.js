/* ============================================================
   Mock data — Veterinaria Patitas Felices
   ============================================================ */

const VET_INFO = {
  nombre: 'Patitas Felices',
  eslogan: 'Cuidamos a quienes más amas',
  telefono: '+52 55 1234 5678',
  whatsapp: '+52 55 8765 4321',
  email: 'contacto@patitasfelices.mx',
  direccion: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, CP 03100',
  horarios: [
    { dias: 'Lunes a Viernes', horas: '09:00 — 20:00' },
    { dias: 'Sábados', horas: '09:00 — 14:00' },
    { dias: 'Domingos', horas: 'Solo emergencias 24h' }
  ],
  redes: {
    facebook: 'https://facebook.com/patitasfelices',
    instagram: 'https://instagram.com/patitasfelices',
    tiktok: 'https://tiktok.com/@patitasfelices'
  },
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.16!3d19.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzI0LjAiTiA5OcKwMDknMzYuMCJX!5e0!3m2!1ses-419!2smx!4v1700000000000'
};

/* ---------- Servicios ---------- */
const SERVICIOS = [
  {
    id: 'consulta',
    nombre: 'Consulta General',
    descripcion: 'Revisión integral de tu mascota con evaluación clínica completa y plan de cuidado personalizado.',
    descripcionCorta: 'Revisión integral de tu mascota.',
    icono: 'bi-clipboard2-pulse',
    imagen: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?w=800&q=80',
    precioDesde: 450,
    destacado: true
  },
  {
    id: 'vacunacion',
    nombre: 'Vacunación',
    descripcion: 'Esquemas completos de vacunación para cachorros y adultos, con carnet digital de seguimiento.',
    descripcionCorta: 'Esquemas completos de vacunación.',
    icono: 'bi-eyedropper',
    imagen: 'https://images.unsplash.com/photo-1628009368231-7bb7b73a1d23?w=800&q=80',
    precioDesde: 280
  },
  {
    id: 'desparasitacion',
    nombre: 'Desparasitación',
    descripcion: 'Programas de desparasitación interna y externa adaptados al estilo de vida de tu mascota.',
    descripcionCorta: 'Control interno y externo de parásitos.',
    icono: 'bi-bug',
    imagen: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80',
    precioDesde: 220
  },
  {
    id: 'cirugia',
    nombre: 'Cirugía Menor',
    descripcion: 'Procedimientos quirúrgicos ambulatorios con quirófano equipado y monitoreo anestésico.',
    descripcionCorta: 'Quirófano equipado y monitoreo.',
    icono: 'bi-bandaid',
    imagen: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80',
    precioDesde: 1800,
    destacado: true
  },
  {
    id: 'emergencia',
    nombre: 'Emergencia 24h',
    descripcion: 'Atención de urgencias las 24 horas, los 365 días del año, con equipo médico en guardia.',
    descripcionCorta: 'Urgencias 24/7 los 365 días.',
    icono: 'bi-heart-pulse',
    imagen: 'https://images.unsplash.com/photo-1601758228001-89f8d0a4d7c0?w=800&q=80',
    precioDesde: 950
  },
  {
    id: 'estetica',
    nombre: 'Estética y Baño',
    descripcion: 'Baño medicado, corte de pelo, limpieza dental y un spa completo para consentir a tu mascota como se merece.',
    descripcionCorta: 'Baño, corte y limpieza dental.',
    icono: 'bi-droplet-half',
    imagen: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=800&q=80',
    precioDesde: 350
  },
  {
    id: 'peluqueria',
    nombre: 'Peluquería Canina',
    descripcion: 'Cortes de raza, trimming y estilismo profesional con groomers certificados.',
    descripcionCorta: 'Cortes de raza y estilismo.',
    icono: 'bi-scissors',
    imagen: 'https://images.unsplash.com/photo-1599839575945-a9e118af1bd2?w=800&q=80',
    precioDesde: 480
  },
  {
    id: 'tienda',
    nombre: 'Tienda y Alimentos',
    descripcion: 'Alimento premium, accesorios, juguetes y medicamentos con asesoría nutricional incluida.',
    descripcionCorta: 'Alimentos premium y accesorios.',
    icono: 'bi-bag-heart',
    imagen: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&q=80',
    precioDesde: 0
  }
];

/* ---------- Equipo ---------- */
const EQUIPO = [
  {
    nombre: 'Dra. María González',
    cargo: 'Directora Médica',
    especialidad: 'Medicina interna felina',
    bio: '12 años de experiencia en clínicas de alta especialidad. Certificada por la AMMVEE.',
    foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80'
  },
  {
    nombre: 'Dr. Carlos Ramírez',
    cargo: 'Cirujano Veterinario',
    especialidad: 'Cirugía de tejidos blandos',
    bio: 'Especialista en procedimientos laparoscópicos y traumatología con 9 años de experiencia.',
    foto: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=600&q=80'
  },
  {
    nombre: 'Lic. Ana Martínez',
    cargo: 'Etóloga Clínica',
    especialidad: 'Comportamiento y nutrición',
    bio: 'Ayuda a resolver problemas de conducta y diseña planes nutricionales personalizados.',
    foto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80'
  },
  {
    nombre: 'Dr. Luis Hernández',
    cargo: 'Veterinario de Emergencias',
    especialidad: 'Urgencias y cuidados intensivos',
    bio: 'Líder del equipo de atención 24h. Certificado en reanimación cardiopulmonar veterinaria.',
    foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80'
  }
];

/* ---------- Testimonios ---------- */
const TESTIMONIOS = [
  {
    nombre: 'Sofía Castillo',
    mascota: 'Luna (Golden Retriever)',
    texto: 'El equipo salvó la vida de Luna cuando se comió algo que no debía. La atención de emergencia fue excepcional y nos mantuvieron informados en todo momento.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
  },
  {
    nombre: 'Roberto Méndez',
    mascota: 'Max (Gato Siamés)',
    texto: 'Llevo a Max con la Dra. María desde hace 6 años. Su trato cariñoso y la limpieza de las instalaciones hacen que mi gato ni se asuste al entrar.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
  },
  {
    nombre: 'Patricia Núñez',
    mascota: 'Rocky (Bulldog Francés)',
    texto: 'La peluquería canina es increíble. Rocky siempre sale guapísimo y oliendo riquísimo. Los precios son justos y el personal muy amable.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1487412720507-e7ab3763c6f0?w=200&q=80'
  }
];

/* ---------- Planes de precios ---------- */
const PLANES = [
  {
    nombre: 'Plan Básico',
    precio: 299,
    periodo: 'mes',
    color: 'outline',
    incluye: [
      '2 consultas generales al mes',
      '10% en servicios adicionales',
      'Recordatorios de vacunas',
      'Acceso a tienda con descuento'
    ]
  },
  {
    nombre: 'Plan Premium',
    precio: 599,
    periodo: 'mes',
    color: 'primary',
    destacado: true,
    incluye: [
      'Consultas ilimitadas',
      'Vacunación anual incluida',
      '2 baños estéticos al mes',
      'Desparasitación trimestral',
      'Emergencias con 20% descuento'
    ]
  },
  {
    nombre: 'Plan Familiar',
    precio: 999,
    periodo: 'mes',
    color: 'outline',
    incluye: [
      'Hasta 4 mascotas',
      'Todos los beneficios del Premium',
      'Visitas a domicilio mensuales',
      'Análisis clínicos semestrales',
      'Asesoría nutricional semanal'
    ]
  }
];

/* ---------- Tabla de precios ---------- */
const PRECIOS_TABLA = [
  {
    categoria: 'Consultas',
    items: [
      { nombre: 'Consulta general', precio: '$450 MXN' },
      { nombre: 'Consulta especializada', precio: '$720 MXN' },
      { nombre: 'Consulta a domicilio', precio: '$850 MXN' },
      { nombre: 'Segunda opinión', precio: '$600 MXN' }
    ]
  },
  {
    categoria: 'Vacunación',
    items: [
      { nombre: 'Parvovirus canino', precio: '$280 MXN' },
      { nombre: 'Quíntuple canina', precio: '$420 MXN' },
      { nombre: 'Triple felina (FVRCP)', precio: '$380 MXN' },
      { nombre: 'Antirrábica', precio: '$220 MXN' }
    ]
  },
  {
    categoria: 'Procedimientos',
    items: [
      { nombre: 'Esterilización (hembra)', precio: 'Desde $2,800 MXN' },
      { nombre: 'Castración (macho)', precio: 'Desde $1,800 MXN' },
      { nombre: 'Extracción dental', precio: 'Desde $650 MXN' },
      { nombre: 'Cirugía menor ambulatoria', precio: 'Desde $1,200 MXN' }
    ]
  },
  {
    categoria: 'Estética',
    items: [
      { nombre: 'Baño estándar', precio: 'Desde $350 MXN' },
      { nombre: 'Baño medicado', precio: 'Desde $480 MXN' },
      { nombre: 'Corte de raza', precio: 'Desde $520 MXN' },
      { nombre: 'Limpieza dental ultrasónica', precio: 'Desde $890 MXN' }
    ]
  }
];

/* ---------- FAQ ---------- */
const FAQ = [
  {
    pregunta: '¿Atienden emergencias fuera de horario?',
    respuesta: 'Sí, contamos con servicio de emergencia 24 horas los 365 días del año. Puedes marcar a nuestra línea directa +52 55 8765 4321 en cualquier momento.'
  },
  {
    pregunta: '¿Necesito cita previa o puedo llegar directo?',
    respuesta: 'Recomendamos agendar cita para consultas programadas, pero aceptamos pacientes sin cita según disponibilidad. Para emergencias no es necesario agendar.'
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Efectivo, transferencia bancaria, tarjetas de crédito/débito (Visa, MasterCard, Amex) y pagos a meses sin intereses con bancos participantes.'
  },
  {
    pregunta: '¿Ofrecen servicio a domicilio?',
    respuesta: 'Sí, realizamos consultas, vacunación y toma de muestras a domicilio en la zona metropolitana. Tiene un costo adicional según la ubicación.'
  },
  {
    pregunta: '¿Pueden atender especies exóticas?',
    respuesta: 'Contamos con profesionales capacitados para atender perros, gatos, conejos, hurones y algunas especies de reptiles. Consulta previamente para aves y roedores.'
  },
  {
    pregunta: '¿Manejan seguros para mascotas?',
    respuesta: 'Sí, trabajamos con las principales aseguradoras del país: Petplan, Banorte Mascotas, Mapfre Mascotas. Pide información al agendar tu cita.'
  }
];

/* ---------- Estadísticas ---------- */
const ESTADISTICAS = [
  { numero: 8500, sufijo: '+', etiqueta: 'Pacientes felices' },
  { numero: 15, sufijo: '', etiqueta: 'Años de experiencia' },
  { numero: 24, sufijo: '/7', etiqueta: 'Emergencias' },
  { numero: 12, sufijo: '', etiqueta: 'Veterinarios' }
];

/* ---------- Línea de tiempo ---------- */
const HISTORIA = [
  {
    año: '2010',
    titulo: 'El inicio',
    descripcion: 'La Dra. María González fundó Patitas Felices en una pequeña clínica de 80 m² con un único propósito: dar atención médica humana y de calidad a las mascotas.'
  },
  {
    año: '2014',
    titulo: 'Primera expansión',
    descripcion: 'Abrimos nuestro quirófano completamente equipado y sumamos a 3 nuevos veterinarios especialistas al equipo.'
  },
  {
    año: '2018',
    titulo: 'Servicio 24 horas',
    descripcion: 'Nos convertimos en la primera clínica veterinaria de la zona en ofrecer atención de emergencia las 24 horas.'
  },
  {
    año: '2022',
    titulo: 'Renovación integral',
    descripcion: 'Remodelamos las instalaciones para incluir área de peluquería, tienda y un jardín de rehabilitación para perros.'
  },
  {
    año: '2026',
    titulo: 'PetTech',
    descripcion: 'Lanzamos nuestra plataforma digital de expedientes y telemedicina para dar seguimiento remoto a nuestros pacientes.'
  }
];
