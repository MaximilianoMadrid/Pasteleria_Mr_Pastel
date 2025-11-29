// ===================== VALIDACIONES REGISTRO =====================

// --- Utilidades de RUT ---
function limpiarRut(texto) {
  return texto.replace(/\./g, '').replace(/\s+/g, '').toUpperCase();
}

function tieneFormatoRutChileno(rutLimpio) {
  // 7 u 8 dígitos, guion y dígito/K (ej: 12345678-5)
  return /^[0-9]{7,8}-[0-9K]$/.test(rutLimpio);
}

function calcularDV(parteNumerica) {
  // Algoritmo estándar módulo 11
  let suma = 0;
  let multiplicador = 2;
  for (let i = parteNumerica.length - 1; i >= 0; i--) {
    suma += parseInt(parteNumerica[i], 10) * multiplicador;
    multiplicador = (multiplicador === 7) ? 2 : multiplicador + 1;
  }
  const resto = 11 - (suma % 11);
  if (resto === 11) return '0';
  if (resto === 10) return 'K';
  return String(resto);
}

function validarRutChileno(rutTexto) {
  const rut = limpiarRut(rutTexto);
  if (!tieneFormatoRutChileno(rut)) return false;
  const [numeros, dvIngresado] = rut.split('-');
  const dvCalculado = calcularDV(numeros);
  return dvIngresado === dvCalculado;
}

// --- Contraseñas ---
function contrasenasIguales(a, b) {
  return a === b && a.length > 0;
}

// --- UI Errores ---
function mostrarErrores(mensajes) {
  const div = document.getElementById('errores');
  if (!div) return;
  if (mensajes.length === 0) {
    div.innerHTML = '';
  } else {
    div.innerHTML = mensajes.map(m => `<div>• ${m}</div>`).join('');
  }
}

// --- Formatear RUN al salir del campo ---
function formatearRutAlSalir(input) {
  const valor = limpiarRut(input.value);
  // Si escribió sin guion (solo números/K), se lo insertamos simple: cuerpo-dv
  if (/^[0-9K]+$/.test(valor) && valor.length >= 2) {
    const cuerpo = valor.slice(0, -1);
    const dv = valor.slice(-1);
    input.value = `${cuerpo}-${dv}`;
  }
}

// --- Submit del formulario (validar + guardar en localStorage) ---
function manejarSubmitRegistro(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const runInput = form.querySelector('#run');
  const nombresInput = form.querySelector('#nombres');
  const correoInput = form.querySelector('#correo');
  const contrasenaInput = form.querySelector('#contrasena');
  const confirmarInput = form.querySelector('#confirmar');

  const mensajes = [];

  // 1) Validación RUT
  const runValor = runInput.value.trim();
  if (!validarRutChileno(runValor)) {
    mensajes.push('El RUN/RUT no es válido. Usa el formato 12.345.678-5 (puntos opcionales).');
  }

  // 2) Contraseñas iguales
  if (!contrasenasIguales(contrasenaInput.value, confirmarInput.value)) {
    mensajes.push('Las contraseñas no coinciden.');
  }

  // Mostrar errores y frenar si corresponde
  if (mensajes.length > 0) {
    mostrarErrores(mensajes);
    return;
  }
  mostrarErrores([]);

  // --- Si está OK, replicamos tu guardado en localStorage ---
  const usuario = {
    run: runInput.value,
    nombres: nombresInput.value,
    correo: correoInput.value,
    contrasena: contrasenaInput.value
  };

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const idx = usuarios.findIndex(u => u.run === usuario.run);

  if (idx !== -1) {
    usuarios[idx] = usuario;
    alert('¡Datos actualizados correctamente!');
  } else {
    usuarios.push(usuario);
    alert('¡Registro exitoso!');
  }

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  form.reset();
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.registro-form');
  const runInput = document.getElementById('run');

  if (runInput) {
    runInput.addEventListener('blur', () => formatearRutAlSalir(runInput));
  }
  if (form) {
    form.addEventListener('submit', manejarSubmitRegistro);
  }
});
