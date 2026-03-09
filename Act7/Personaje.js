export class Personaje {

    constructor(nombre, raza, clase, nivel=1, alineamiento, competencia = 2, constitucion=8, destreza=8, fuerza=8, inteligencia=8, sabiduria=8, carisma=8, habilidades) {
        this.nombre = nombre;
        this.raza = raza;
        this.clase = clase;
        this.nivel = nivel;
        this.alineamiento = alineamiento;
        this.competencia = competencia;
        this.constitucion = constitucion;
        this.destreza = destreza;
        this.fuerza = fuerza;
        this.inteligencia = inteligencia;
        this.sabiduria = sabiduria;
        this.carisma = carisma;
        this.habilidades = habilidades;
    }

    get constitucionMod(){
        return Math.floor((this.constitucion-10)/2);
    }

    get destrezaMod(){
        return Math.floor((this.destreza-10)/2);
    }

    get fuerzaMod(){
        return Math.floor((this.fuerza-10)/2);
    }

    get inteligenciaMod(){
        return Math.floor((this.inteligencia-10)/2);
    }

    get sabiduriaMod(){
        return Math.floor((this.sabiduria-10)/2);
    }

    get carismaMod(){
        return Math.floor((this.carisma-10)/2);
    }

    get dado(){
        switch(this.clase){
            case "Bárbaro":
                return 12;

            case "Guerrero":
            case "Paladín":
            case "Explorador":
                return 10;

            case "Bardo":
            case "Clérigo":
            case "Druida":
            case "Monje":
            case "Pícaro":
            case "Brujo":
                return 8;

            case "Mago":
            case "Hechicero":
                return 6;
        }
    }

    get pGolpe(){
        if (this.nivel==1)
            return this.dado+this.constitucionMod;
        else
            return this.dado + (this.dado/2+1) * nivel-1 + this.constitucionMod*this.nivel;
    }

    get armadura(){
        switch(this.clase){
            case "Bárbaro":
                return 10 + this.destrezaMod + this.constitucionMod;
            case "Monje":
                return 10 + this.destrezaMod + this.sabiduriaMod;
            default:
                return 10 + this.destrezaMod;
        }
    }

    get iniciativa(){
        return this.destrezaMod;
    }

    get velocidad(){
        let velocidad;
        switch(this.raza){
            case "Enano":
            case "Mediano":
            case "Gnomo":
                velocidad = 25;
            default:
                velocidad = 30;
        }
        if (this.clase==="Bárbaro" && this.nivel>=5) {
            velocidad+=10;
        }
        if (this.clase==="Monje") {
            if (this.nivel>=18)
                velocidad += 30;
            else if (this.nivel>=14)
                velocidad += 25;
            else if (this.nivel>=10)
                velocidad += 20;
            else if (this.nivel>=6)
                velocidad += 15;
            else if (this.nivel>=2)
                velocidad += 10
        }
        return velocidad;
    }

    puntuacionHabilidad(habilidad){
        const puntuacion = this.habilidades.includes(habilidad)?this.competencia:0;
        switch (habilidad) {
            case "Atletismo":
                return puntuacion + this.fuerzaMod;
            case "Intimidación":
            case "Persuasión":
            case "Engaño":
            case "Interpretación":
                return puntuacion + this.carismaMod;
            case "Sigilo":
            case "Acrobacias":
            case "Juego de manos":
                return puntuacion + this.destrezaMod;
            case "Percepción":
            case "Trato con animales":
            case "Perspicacia":
            case "Medicina":
            case "Supervivencia":
                return puntuacion + this.sabiduriaMod;
            case "Conocimiento arcano":
            case "Historia":
            case "Investigación":
            case "Naturaleza":
            case "Religión":
                return puntuacion + this.inteligenciaMod
                
        }
    }

    get valid(){
        return this.nombre != undefined && this.raza != undefined && this.clase != undefined && this.alineamiento != undefined && this.habilidades != undefined;
    }
}
