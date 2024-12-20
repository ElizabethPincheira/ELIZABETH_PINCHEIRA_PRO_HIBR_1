
export abstract class FiguraGeometrica {

  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract calcularPerimetro(): number;
}
