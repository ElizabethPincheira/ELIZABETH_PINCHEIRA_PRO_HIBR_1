import {FiguraGeometrica } from'../clases/FiguraGeometrica';

// clase hija de FiguraGeometrica
export class TrianguloEscaleno extends FiguraGeometrica{
    // atributos
    ladoA : number;
    ladoB : number;
    ladoC : number;
// constructor
    constructor(nombre:string, ladoA : number, ladoB : number, ladoC : number ){
        super(nombre);
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
        // metodo que usa el padre pero con override, se sobreescribe para el hijo (circulo)
    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC //formula, P=A+B+C
    }
        


}