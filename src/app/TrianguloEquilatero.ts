import { TrianguloEscaleno } from './TrianguloEscaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(override ladoA: number) {
    super(ladoA, ladoA, ladoA);
    this.nombre = 'Triángulo Equilátero';
  }
}
