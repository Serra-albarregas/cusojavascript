export class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    comprar(cantidad){
        if (this.cantidad-cantidad>=0) {
            this.cantidad-=cantidad;
            return this.precio * cantidad;
        }
        throw new Error("No hay suficiente cantidad");
    }

    reponer(cantidad){
        this.cantidad += cantidad;
    }

    aplicarDescuento(porcentaje){
        return this.precio*(1-porcentaje/100);
    }

    informacion(){
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}, Categoría: ${this.categoria}`;
    }

    get agotado(){
        return this.cantidad==0;
    }

    esPremium(){
        return this.precio > 100;
    }
}