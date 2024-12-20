
import {FiguraGeometrica } from'../clases/FiguraGeometrica';
// clase Circulo, hereda de clase abstracta FigurasGeometricas
export class Circulo extends FiguraGeometrica {
// atributos de la clase
    radio: number;
    // constructor
    constructor(nombre: string, radio : number){
        super(nombre); // llama al constructor de la clase padre
        this.radio = radio;
    }
    // metodo que usa el padre pero con override, se sobreescribe para el hijo (circulo)
    override calcularPerimetro(): number {
        return 2 * Math.PI * this.radio; //formula P = 2π * r
    }

}