import {FiguraGeometrica } from'../clases/FiguraGeometrica';

// clase hija de FiguraGeometrica
export class TrianguloEquilatero extends FiguraGeometrica {
    // atributos
    lado : number;
// constructor
    constructor(nombre:string, lado: number ){
        super(nombre);
        this.lado = lado;
    }
        // metodo que usa el padre pero con override, se sobreescribe para el hijo (circulo)
    override calcularPerimetro(): number {
        return this.lado * 3 //formula, P=a*3
    }
        
    

}