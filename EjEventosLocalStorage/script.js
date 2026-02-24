document.addEventListener("DOMContentLoaded", function () {

    const nombreInput = document.querySelector("#nombre");
    const fechaInput = document.querySelector("#fechaNacimiento");
    const edadDiv = document.querySelector("#edad");
    const btnGuardar = document.querySelector("#guardar");
    const btnCargar = document.querySelector("#cargar");

    // Convertir nombre a mayúsculas al perder el foco
    nombreInput.addEventListener("blur", function () {
        this.value = this.value.toUpperCase();
    });

    // Calcular edad al pulsar espacio en el campo fecha
    fechaInput.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            event.preventDefault();

            if (!this.value) {
                edadDiv.textContent = "Introduce una fecha válida.";
                return;
            }

            const fechaNacimiento = new Date(this.value);
            const hoy = new Date();

            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }

            edadDiv.textContent = "Edad: " + edad + " años";
        }
    });

    // Guardar en localStorage
    btnGuardar.addEventListener("click", function () {
        const datos = {
            nombre: nombreInput.value,
            fechaNacimiento: fechaInput.value
        };

        localStorage.setItem("datosFormulario", JSON.stringify(datos));
        alert("Datos guardados correctamente.");
    });

    // Cargar desde localStorage
    btnCargar.addEventListener("click", function () {
        const datosGuardados = localStorage.getItem("datosFormulario");

        if (!datosGuardados) {
            alert("No hay datos guardados.");
            return;
        }

        const datos = JSON.parse(datosGuardados);
        nombreInput.value = datos.nombre;
        fechaInput.value = datos.fechaNacimiento;

        edadDiv.textContent = "";
        alert("Datos cargados correctamente.");
    });

});