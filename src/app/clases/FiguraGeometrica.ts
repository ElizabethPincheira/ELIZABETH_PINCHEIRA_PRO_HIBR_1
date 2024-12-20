// clase abstracta, es una plantilla para las otras clases
export abstract class FiguraGeometrica {
    // atributos-------
    nombre
    // constructor--------
    constructor ( nombre : string ){
        this.nombre = nombre;
    }
    // metodo abstracto------
    abstract calcularPerimetro(): number;

}




