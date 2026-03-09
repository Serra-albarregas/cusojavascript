import { Personaje } from "../Personaje.js";
import { saveObject } from "../GestorAlmacenamiento.js";
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

function mostrarToast(icono, mensaje) {

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: icono,
    title: mensaje,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  });

}

document.addEventListener("DOMContentLoaded", () => {
  const personaje = new Personaje();

  const inputNombre = document.querySelector("#nombre");
  const inputRaza = document.querySelector("#raza");
  const inputClase = document.querySelector("#clase");
  const inputAlineamiento = document.querySelector("#alineamiento");
  const botonGuardar = document.querySelector("#botonGuardar");
  const botonContinuar = document.querySelector("#botonContinuar");

  inputNombre.addEventListener("change", () => {
    personaje.nombre = inputNombre.value;
  })

  inputRaza.addEventListener("change", () => {
    personaje.raza = inputRaza.value;
  })

  inputClase.addEventListener("change", () => {
    personaje.clase = inputClase.value;
  })

  inputAlineamiento.addEventListener("change", () => {
    personaje.alineamiento = inputAlineamiento.value;
  })

  const checks = document.querySelectorAll('input[name="habilidad"]');
  const warning = document.getElementById('skills-warning');
  checks.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = [...checks].filter(c => c.checked);
      if (selected.length > 2) {
        cb.checked = false;
        warning.classList.add('visible');
      }
      else {
        personaje.habilidades = selected.map(item => item.value);
        warning.classList.remove('visible');
      }
    });
  });

  const disiponible = document.querySelector("#puntos-disponibles");
  let puntosDisponibles = 27;
  document.querySelectorAll('.stat-row').forEach(row => {
    const barra = row.querySelector('.barra');
    const valor = row.querySelector('.stat-value');
    const caracteristica = row.querySelector("label");
    let puntos = 8;

    const actualizar = () => {
      valor.textContent = puntos;
      disiponible.textContent = puntosDisponibles;
      barra.style.width = ((puntos - 1) / 19 * 100) + '%';
      personaje[caracteristica.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")] = puntos;
      console.log(personaje);
    };

    row.querySelectorAll('button').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (i === 0 && puntos > 1) {
          let precio = puntos < 14 ? 1 : 2;
          if (puntosDisponibles + precio <= 27) {
            puntos--;
            puntosDisponibles += precio;
          }

        }
        if (i === 1 && puntos < 20) {
          let precio = puntos >= 13 ? 2 : 1;
          if (puntosDisponibles - precio >= 0) {
            puntos++;
            puntosDisponibles -= precio;
          }
        }
        actualizar();
      });
    });
  });

  botonGuardar.addEventListener("click", () => {
    if (personaje.valid) {
      saveObject(personaje);
      mostrarToast("success", "Personaje guardado");
    } else {
      mostrarToast("error", "Debes completar todos los campos");
    }
  })

  botonContinuar.addEventListener("click", () => {
    if (personaje.valid) {
      saveObject(personaje);
      Swal.fire({
        title: "Forjando personaje...",
        html: "Preparando tu aventura",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      }).then(() => {
        return Swal.fire({
          icon: "success",
          title: "¡Personaje listo!",
          text: "Tu héroe está preparado para la aventura",
          confirmButtonText: "Comenzar aventura"
        });
      }).then(() => {
        window.location.href = "./visor.html";
      });
    } else {
      mostrarToast("error", "Debes completar todos los campos");
    }
  })
})