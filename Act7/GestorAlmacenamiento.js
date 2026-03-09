import { Personaje } from "./Personaje.js";

export const saveObject = function (item) {
    localStorage.setItem("personaje", JSON.stringify(item));
}

export const loadObject = function () {
    return Object.assign(new Personaje, JSON.parse(localStorage.getItem("personaje")));
}