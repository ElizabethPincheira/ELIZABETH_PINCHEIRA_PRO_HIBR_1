import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  public ladoA: number;
  public ladoB: number;
  public ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triángulo Escaleno');
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
