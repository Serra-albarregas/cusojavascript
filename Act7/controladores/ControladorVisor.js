import { loadObject } from "../GestorAlmacenamiento.js";
import { Personaje } from "../Personaje.js";

document.addEventListener("DOMContentLoaded", () => {
    const personaje = loadObject();
    if (!personaje.valid) {
        window.location.href = "./creacion.html";
    }
    console.log(personaje);

    document.querySelector("#name").textContent = personaje.nombre;

    document.querySelectorAll(".info-box").forEach(box => {
        const label = box.querySelector(".info-label");
        const value = box.querySelector(".info-value");

        value.textContent = personaje[label.textContent.toLowerCase()];
    });

    document.querySelectorAll(".ability-box").forEach(box => {
        const name = box.querySelector(".ability-name");
        const score = box.querySelector(".ability-score");
        const modifier = box.querySelector(".ability-modifier");
        const normalizedName = name.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        score.textContent = personaje[normalizedName];
        modifier.textContent = personaje[`${normalizedName}Mod`];
    });

    document.querySelector("#puntos-golpe").textContent = personaje.pGolpe;
    document.querySelector("#armadura").textContent = personaje.armadura;
    document.querySelector("#iniciativa").textContent = personaje.iniciativa;
    document.querySelector("#velocidad").textContent = `${personaje.velocidad} ft`;

    document.querySelectorAll(".skills-list li").forEach(item => {
        const bonus = item.querySelector(".bonus");
        const habilidad = item.querySelector(".ability-name").textContent.trim();
        const prof = item.querySelector(".prof");
        if (personaje.habilidades.includes(habilidad)){
            prof.textContent = "●";
        } else {
            prof.textContent = "○";
        }
        bonus.textContent = personaje.puntuacionHabilidad(habilidad);
    });


})