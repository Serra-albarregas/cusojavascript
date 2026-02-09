// 1 Modificación básica de contenido
const titulo = document.querySelector('#titulo');
titulo.textContent = 'Gestión de usuarios';

const descripcion = document.querySelector('#descripcion');
descripcion.textContent += ' (datos actualizados automáticamente)';

// 2 Conteo dinámico de elementos
const listaUsuarios = document.querySelector('#usuarios');
let usuarios = listaUsuarios.querySelectorAll('li');

const totalSpan = document.querySelector('#total');
totalSpan.textContent = usuarios.length;

// 3 Uso de dataset + clases
usuarios.forEach(usuario => {
  const estado = usuario.dataset.estado;

  if (estado === 'activo') {
    usuario.classList.add('activo');
  } else if (estado === 'inactivo') {
    usuario.classList.add('inactivo');
  }
});

// 4 Cálculo de usuarios activos
const usuariosActivos = document.querySelectorAll('li[data-estado="activo"]');
const activosSpan = document.querySelector('#activos');
activosSpan.textContent = usuariosActivos.length;

// 5 Creación dinámica de elementos
const nuevoUsuario = document.createElement('li');
nuevoUsuario.textContent = 'Sofía';
nuevoUsuario.dataset.estado = 'activo';
nuevoUsuario.classList.add('activo');

listaUsuarios.append(nuevoUsuario);

// Actualizamos las referencias y conteos
usuarios = listaUsuarios.querySelectorAll('li');
totalSpan.textContent = usuarios.length;
activosSpan.textContent = document.querySelectorAll('li[data-estado="activo"]').length;

// 6 Eliminación de nodos
const primerInactivo = listaUsuarios.querySelector('li[data-estado="inactivo"]');
if (primerInactivo) {
  primerInactivo.remove();
}

// Volvemos a actualizar conteos
usuarios = listaUsuarios.querySelectorAll('li');
totalSpan.textContent = usuarios.length;
activosSpan.textContent = document.querySelectorAll('li[data-estado="activo"]').length;

// 7 Manipulación del DOM estructural
const seccionInfo = document.querySelector('#info');
seccionInfo.classList.add('destacado');

const parrafoNuevo = document.createElement('p');
parrafoNuevo.textContent = 'Última revisión: hoy';
seccionInfo.append(parrafoNuevo);

// 8 Trabajo con nodos relacionados
const parrafoTotal = totalSpan.parentElement;
const numeroTotal = totalSpan.textContent;

parrafoTotal.textContent = 'Cantidad total de usuarios: ';
parrafoTotal.append(totalSpan);

// 9 Limpieza selectiva
const inactivos = document.querySelectorAll('.inactivo');
inactivos.forEach(usuario => usuario.remove());

// Conteos finales
usuarios = listaUsuarios.querySelectorAll('li');
totalSpan.textContent = usuarios.length;
activosSpan.textContent = usuarios.length;

// 10 Manejo de atributos HTML
listaUsuarios.setAttribute('data-lista', 'principal');

if (listaUsuarios.hasAttribute('id')) {
  listaUsuarios.setAttribute('title', 'Lista principal de usuarios');
}

// 11 Atributos dinámicos en los <li>
usuarios = listaUsuarios.querySelectorAll('li');

usuarios.forEach((usuario, index) => {
  usuario.setAttribute('title', `Usuario: ${usuario.textContent}`);
  usuario.setAttribute('data-index', index + 1);
});

// 12 Estilos inline según estado
usuarios.forEach(usuario => {
  if (usuario.dataset.estado === 'activo') {
    usuario.style.backgroundColor = '#e6ffe6';
  } else if (usuario.dataset.estado === 'inactivo') {
    usuario.style.opacity = '0.5';
    usuario.style.fontSize = '14px';
  }
});

// 13 Modificación y lectura de estilos
const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
h1.style.color = '#333';

console.log('Color del título:', h1.style.color);
