import { Producto } from "./Producto.js";

console.log("Actividad 5 - parte 1");
const p = new Producto("Memoria RAM", 40, 20, "Electrónica");

try {
    console.log(p.comprar(10));
    console.log(p.comprar(50));
} catch (error) {
    console.error(error);
}
p.reponer(50);
console.log(p.cantidad);
console.log(p.aplicarDescuento(20));
console.log(p.informacion());
console.log(p.agotado);
console.log(p.esPremium());


console.log("Actividad 5 - parte 2");

const productos1 = [];
productos1.push(new Producto("Memoria RAM", 40, 20, "Electrónica"));
productos1.push(new Producto("Teclado", 25, 15, "Periféricos"));
productos1.push(new Producto("Ratón", 15, 30, "Periféricos"));
productos1.push(new Producto("Disco SSD", 120, 10, "Almacenamiento"));
productos1.push(new Producto("Monitor", 180, 5, "Pantallas"));

const productos2 = [];
productos2.push(new Producto("Auriculares", 35, 25, "Audio"));
productos2.push(new Producto("Altavoces", 60, 12, "Audio"));
productos2.push(new Producto("Webcam", 50, 8, "Accesorios"));
productos2.push(new Producto("Impresora", 90, 6, "Oficina"));
productos2.push(new Producto("Tablet", 220, 4, "Electrónica"));

// 1
const productosTotal = [...productos1, ...productos2];
console.log(productosTotal);

// 2
productosTotal.push(new Producto("MonitorLCD", 250, 5, "Pantallas"));
productosTotal.unshift(new Producto("MonitorLCD curvo", 250, 5, "Pantallas"));
console.log(productosTotal);

// 3
const crearArray = (...items) => items;
console.log(crearArray(5,9,6,3,2))

// 4
const separarArray = (array) => {
    const [primero, ...resto] = array;      // El operador REST solo puede usarse en última posición
    const ultimo = resto.pop();
    return [primero, resto, ultimo];
}
console.log(separarArray(productos1));

// 5
let producto;
for(let i = 0; i<productosTotal.length; i++) {
    if (productosTotal[i].nombre === "Webcam"){
        producto = productosTotal[i];
    }
}
console.log(producto);
producto = productosTotal.find((item)=>item.nombre==="Monitor");
console.log(producto);

// 6
console.log(productosTotal.reverse());

// 7
productosTotal.sort((a, b)=> a.precio-b.precio);
console.log(productosTotal);

// 8
let productosCopia = structuredClone(productosTotal);
productosCopia.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productosCopia);

// 8 - 2
productosCopia = productosTotal.map((item)=>new Producto(item.nombre, item.precio, item.cantidad, item.categoria));
productosCopia.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productosCopia);

// 9
productosTotal.forEach(item=>item.precio+=10);
console.log(productosTotal);

// 10
const productosNombre = productosTotal.map(item => item.nombre);
console.log(productosNombre);