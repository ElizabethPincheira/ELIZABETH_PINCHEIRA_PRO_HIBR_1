import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonList, IonItem, IonButton, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../clases/TrianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonList, IonItem, 
    IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg]
})
export class TrianguloComponent implements OnInit {

    // propiedad para capturar los lados del triangulo desde el formulario
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;

    // variable para almacenar el resultado que viene desde el metodo calcular perimetro
  resultadoPerimetroTriangulo: number | null = null;


  constructor() { }

  ngOnInit() {
  }

  calcularPerimetroOnClick(){
    const trianguloEscaleno = new TrianguloEscaleno('trianguloescaleno',this.ladoA,this.ladoB,this.ladoC)
    this.resultadoPerimetroTriangulo=(trianguloEscaleno.calcularPerimetro());
   console.log("calculaaaaaa")
   console.log(trianguloEscaleno.calcularPerimetro())
  }




}
