const STORAGE_KEYS = {
  USERS: 'vet_users',
  SESSION: 'vet_session',
  RESERVAS: 'vet_reservas',
  RESERVA_DRAFT: 'vet_reserva_draft',
  PAGO_DRAFT: 'vet_pago_draft',
  MASCOTAS: 'vet_mascotas',
  THEME: 'vet_theme',
  CONTACT_MSGS: 'vet_contact_messages',
  REDIRECT: 'vet_redirect'
};

const SERVICIOS = [
  { id: 'vet1', categoria: 'consulta', nombre: 'Consulta General Veterinaria', descripcion: 'Evaluación clínica completa de tu mascota con revisión integral, diagnóstico y recomendaciones personalizadas.', duracion: 45, precio: 80, imagen: 'assets/service-checkup.jpg' },
  { id: 'vet2', categoria: 'consulta', nombre: 'Vacunación', descripcion: 'Aplicación de vacunas según el calendario de tu mascota: parvovirus, rabia, séxtuple, triple felina y más.', duracion: 30, precio: 60, imagen: 'assets/service-vaccine.jpg' },
  { id: 'vet3', categoria: 'consulta', nombre: 'Desparasitación', descripcion: 'Tratamiento antiparasitario interno y externo para proteger a tu mascota de parásitos.', duracion: 20, precio: 40, imagen: 'assets/pet-dog.jpg' },
  { id: 'vet4', categoria: 'estetica', nombre: 'Baño y Corte Completo', descripcion: 'Baño medicado, corte según raza, secado profesional y perfume hipoalergénico.', duracion: 90, precio: 70, imagen: 'assets/service-grooming.jpg' },
  { id: 'vet5', categoria: 'estetica', nombre: 'Corte de Uñas y Limpieza', descripcion: 'Corte de uñas, limpieza de oídos y glándulas anales para el confort de tu mascota.', duracion: 30, precio: 25, imagen: 'assets/service-grooming.jpg' },
  { id: 'vet6', categoria: 'cirugia', nombre: 'Cirugía Menor', descripcion: 'Procedimientos quirúrgicos ambulatorios con anestesia monitoreada y cuidados post-operatorios.', duracion: 120, precio: 280, imagen: 'assets/service-surgery.jpg' },
  { id: 'vet7', categoria: 'cirugia', nombre: 'Esterilización', descripcion: 'Esterilización con láser de CO2, mínima invasión, pronta recuperación y control del dolor.', duracion: 90, precio: 220, imagen: 'assets/service-surgery.jpg' },
  { id: 'vet8', categoria: 'analisis', nombre: 'Análisis Clínicos', descripcion: 'Hemograma, química sanguínea, perfil renal, tiroideo y otros exámenes de laboratorio.', duracion: 30, precio: 90, imagen: 'assets/service-lab.jpg' },
  { id: 'vet9', categoria: 'emergencia', nombre: 'Atención de Emergencia', descripcion: 'Servicio 24/7 para urgencias veterinarias. Atención inmediata con equipo de cuidados intensivos.', duracion: 60, precio: 150, imagen: 'assets/service-emergency.jpg' },
  { id: 'vet10', categoria: 'odontologia', nombre: 'Limpieza Dental', descripcion: 'Profilaxis dental con ultrasonido, eliminación de sarro y pulido dental para una boca saludable.', duracion: 60, precio: 180, imagen: 'assets/service-checkup.jpg' }
];

const VETERINARIOS = [
  { id: 'vv1', nombre: 'Dra. Sofía Ramírez', rol: 'Medicina General', colegiatura: 'CMV 28415', foto: 'assets/vet-woman.jpg', rating: 4.9, experiencia: '10 años', bio: 'Apasionada por la medicina preventiva y el bienestar integral de perros y gatos.', especialidades: ['vet1','vet2','vet3','vet8'] },
  { id: 'vv2', nombre: 'Dr. Carlos Mendoza', rol: 'Cirujano Veterinario', colegiatura: 'CMV 31208', foto: 'assets/vet-man.jpg', rating: 4.8, experiencia: '15 años', bio: 'Especialista en cirugía láser y procedimientos de mínima invasión.', especialidades: ['vet6','vet7','vet9','vet10'] },
  { id: 'vv3', nombre: 'Dra. Lucía Torres', rol: 'Estética y Spa', colegiatura: 'CMV 29842', foto: 'assets/vet-woman.jpg', rating: 5.0, experiencia: '8 años', bio: 'Groomer certificada con técnica libre de estrés para mascotas ansiosas.', especialidades: ['vet4','vet5','vet10'] },
  { id: 'vv4', nombre: 'Dr. Andrés Vega', rol: 'Diagnóstico Clínico', colegiatura: 'CMV 33560', foto: 'assets/vet-man.jpg', rating: 4.9, experiencia: '12 años', bio: 'Especialista en diagnóstico por imagen y análisis de laboratorio avanzado.', especialidades: ['vet1','vet8','vet2','vet9'] }
];

const ESPECIES = [
  { id: 'perro', label: 'Perro', icon: '🐶' },
  { id: 'gato', label: 'Gato', icon: '🐱' },
  { id: 'ave', label: 'Ave', icon: '🦜' },
  { id: 'conejo', label: 'Conejo', icon: '🐰' },
  { id: 'otro', label: 'Otro', icon: '🐾' }
];

const HORARIOS = {
  lunes: { abierto: true, desde: '09:00', hasta: '20:00' },
  martes: { abierto: true, desde: '09:00', hasta: '20:00' },
  miercoles: { abierto: true, desde: '09:00', hasta: '20:00' },
  jueves: { abierto: true, desde: '09:00', hasta: '20:00' },
  viernes: { abierto: true, desde: '09:00', hasta: '20:00' },
  sabado: { abierto: true, desde: '09:00', hasta: '18:00' },
  domingo: { abierto: true, desde: '10:00', hasta: '14:00', nota: 'Solo emergencias' }
};

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Juan Pérez', email: 'juan@test.com', telefono: '+51 999 111 222', dni: '45678901', password: '123456', foto: 'assets/avatar-man.jpg', creado: Date.now() - 86400000 * 60 },
        { id: 'u2', nombre: 'María López', email: 'maria@test.com', telefono: '+51 999 333 444', dni: '47890123', password: '123456', foto: 'assets/avatar-woman.jpg', creado: Date.now() - 86400000 * 30 }
      ]);
    } else {
      const migrated = users.map(user => {
        if (user.email === 'maria@test.com') return { ...user, foto: 'assets/avatar-woman.jpg' };
        if (!user.foto || user.foto.includes('images.unsplash.com') || user.foto.endsWith('.svg')) {
          return { ...user, foto: 'assets/avatar-man.jpg' };
        }
        return user;
      });
      if (JSON.stringify(migrated) !== JSON.stringify(users)) {
        Storage.set(STORAGE_KEYS.USERS, migrated);
      }
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    const newUser = {
      id: 'u' + Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      dni: data.dni || '',
      password: data.password,
      foto: 'assets/avatar-man.jpg',
      creado: Date.now()
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  loginOrRegister(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    let user = users.find(u => u.email === data.email);
    if (!user) {
      const result = this.register(data);
      if (!result.ok) return result;
      user = result.user;
    } else if (user.password !== data.password) {
      return { ok: false, error: 'La contraseña no coincide con este email.' };
    }
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  },
  changePassword(userId, currentPassword, newPassword) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.id === userId);
    if (!user) return { ok: false, error: 'Usuario no encontrado.' };
    if (user.password !== currentPassword) return { ok: false, error: 'La contraseña actual es incorrecta.' };
    return this.update(userId, { password: newPassword });
  },
  emailExists(email) {
    return !!Storage.get(STORAGE_KEYS.USERS, []).find(u => u.email === email);
  },
  resetPasswordRequest(email) {
    if (!this.emailExists(email)) return { ok: false, error: 'No existe una cuenta con este correo.' };
    return { ok: true };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 'vet1', profesionalId: 'vv1', fecha: this._futureDate(3), hora: '10:00', mascota: { nombre: 'Max', especie: 'perro', raza: 'Golden Retriever', edad: '4 años' }, estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', precio: 80, notas: '', createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 'vet4', profesionalId: 'vv3', fecha: this._futureDate(7), hora: '15:00', mascota: { nombre: 'Luna', especie: 'gato', raza: 'Siamés', edad: '3 años' }, estado: 'pendiente', pago: 'pendiente', metodoPago: null, precio: 70, notas: 'Corte completo y baño medicado', createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 'vet2', profesionalId: 'vv1', fecha: this._futureDate(-15), hora: '11:00', mascota: { nombre: 'Max', especie: 'perro', raza: 'Golden Retriever', edad: '4 años' }, estado: 'completada', pago: 'pagado', metodoPago: 'yape', precio: 60, notas: 'Vacuna antirrábica', createdAt: Date.now() - 86400000 * 20 },
        { id: 'r4', userId: 'u1', servicioId: 'vet3', profesionalId: 'vv1', fecha: this._futureDate(-30), hora: '16:00', mascota: { nombre: 'Rocky', especie: 'perro', raza: 'Bulldog Francés', edad: '5 años' }, estado: 'completada', pago: 'pagado', metodoPago: 'efectivo', precio: 40, notas: '', createdAt: Date.now() - 86400000 * 35 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = { id: 'r' + Date.now(), createdAt: Date.now(), estado: 'pendiente', pago: 'pendiente', metodoPago: null, ...data };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); },
  setCurrent(id) { Storage.set('vet_reserva_actual', id); },
  getCurrent() { return Storage.get('vet_reserva_actual', null); },
  canCancel(reserva) {
    if (!reserva) return false;
    if (['anulada', 'completada'].includes(reserva.estado)) return false;
    const fechaHora = new Date(reserva.fecha + 'T' + (reserva.hora || '00:00') + ':00');
    const ahora = new Date();
    const diff = fechaHora - ahora;
    return diff > 24 * 60 * 60 * 1000;
  }
};

const Mascotas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.MASCOTAS, null);
    if (list === null) {
      Storage.set(STORAGE_KEYS.MASCOTAS, [
        { id: 'm1', userId: 'u1', nombre: 'Max', especie: 'perro', raza: 'Golden Retriever', edad: '4 años', createdAt: Date.now() - 86400000 * 90 },
        { id: 'm2', userId: 'u1', nombre: 'Luna', especie: 'gato', raza: 'Siamés', edad: '3 años', createdAt: Date.now() - 86400000 * 60 }
      ]);
    }
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.MASCOTAS, []).filter(m => m.userId === userId);
  },
  create(userId, data) {
    const list = Storage.get(STORAGE_KEYS.MASCOTAS, []);
    const newPet = { id: 'm' + Date.now(), userId, createdAt: Date.now(), ...data };
    list.push(newPet);
    Storage.set(STORAGE_KEYS.MASCOTAS, list);
    return newPet;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.MASCOTAS, []);
    const idx = list.findIndex(m => m.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.MASCOTAS, list);
    return list[idx];
  },
  remove(id) {
    const list = Storage.get(STORAGE_KEYS.MASCOTAS, []).filter(m => m.id !== id);
    Storage.set(STORAGE_KEYS.MASCOTAS, list);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.MASCOTAS, []).find(m => m.id === id) || null;
  }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatDateShort(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatPrice(n) { return 'S/ ' + Number(n).toFixed(2); },
  reservaPrecio(r) {
    if (r && typeof r.precio === 'number') return r.precio;
    const s = r ? SERVICIOS.find(x => x.id === r.servicioId) : null;
    return s ? s.precio : 0;
  },
  servicioById(id) { return SERVICIOS.find(s => s.id === id); },
  veterinarioById(id) { return VETERINARIOS.find(v => v.id === id); },
  especieById(id) { return ESPECIES.find(e => e.id === id); },
  categoriaLabel(cat) {
    const m = {
      consulta: 'Medicina General',
      estetica: 'Estética y Spa',
      cirugia: 'Cirugía',
      analisis: 'Diagnóstico',
      emergencia: 'Emergencia',
      odontologia: 'Odontología'
    };
    return m[cat] || cat;
  },
  estadoBadge(estado) {
    const map = {
      pendiente: { label: 'Pendiente', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada: { label: 'Pagada', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      anulada: { label: 'Anulada', cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente: { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado: { label: 'Pagado', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  generateSlots(servicioId, fecha) {
    if (!servicioId || !fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 + mEnd;
    while (cur + 30 <= end) {
      const hh = String(Math.floor(cur/60)).padStart(2,'0');
      const mm = String(cur%60).padStart(2,'0');
      slots.push(`${hh}:${mm}`);
      cur += 30;
    }
    return slots;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      Storage.set(STORAGE_KEYS.REDIRECT, redirectUrl || window.location.pathname);
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  escape(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
};

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'index' },
    { href: 'services.html', label: 'Servicios', key: 'services' },
    { href: 'prices.html', label: 'Precios', key: 'prices' },
    { href: 'gallery.html', label: 'Galería', key: 'gallery' },
    { href: 'schedules.html', label: 'Horarios', key: 'schedules' },
    { href: 'contact.html', label: 'Contacto', key: 'contact' }
  ];
  const authLinks = user
    ? `<a href="profile.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${UI.escape(user.nombre.split(' ')[0])}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="login.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="register.html" class="bg-primary text-white font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary-light transition-all">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-10 w-10 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 22c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6zm20 0c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6zM9 32c-2 0-4-2-4-5s2-5 4-5 4 2 4 5-2 5-4 5zm30 0c-2 0-4-2-4-5s2-5 4-5 4 2 4 5-2 5-4 5z" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
            <ellipse cx="24" cy="30" rx="10" ry="11" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
            <circle cx="21" cy="28" r="1.2" fill="currentColor"/>
            <circle cx="27" cy="28" r="1.2" fill="currentColor"/>
            <path d="M22 33 Q24 35 26 33" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          </svg>
          <div>
            <h2 class="text-lg font-bold text-white leading-tight" style="font-family: 'Fredoka', sans-serif">Patitas Felices</h2>
            <p class="text-[10px] uppercase tracking-widest text-primary/80">Veterinaria</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="profile.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="login.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="register.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-9 w-9 text-primary" viewBox="0 0 48 48" fill="none"><path d="M14 22c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6zm20 0c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6zM9 32c-2 0-4-2-4-5s2-5 4-5 4 2 4 5-2 5-4 5zm30 0c-2 0-4-2-4-5s2-5 4-5 4 2 4 5-2 5-4 5z" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/><ellipse cx="24" cy="30" rx="10" ry="11" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/><circle cx="21" cy="28" r="1.2" fill="currentColor"/><circle cx="27" cy="28" r="1.2" fill="currentColor"/><path d="M22 33 Q24 35 26 33" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            <h3 class="text-lg font-bold text-white" style="font-family: 'Fredoka', sans-serif">Patitas Felices</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Cuidamos a quienes más quieres. Atención veterinaria integral con tecnología moderna y mucho amor por tu mascota.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="services.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="prices.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="gallery.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="schedules.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Horarios</a></li>
            <li><a href="contact.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terms.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacy.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="forgot-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Pardo y Aliaga 480, San Isidro
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +51 999 555 888
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hola@patitasfelices.pe
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 Patitas Felices. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600">San Isidro, Lima · Hecho con amor por las mascotas</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  Mascotas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});
