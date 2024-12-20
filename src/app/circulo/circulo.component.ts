import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonList, IonItem, IonButton, IonCard, IonCardHeader,
          IonCardSubtitle, IonCardTitle, IonCardContent, IonImg} from '@ionic/angular/standalone';
import { Circulo } from '../clases/Circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonInput, IonList, IonItem, 
    IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg]
})
export class CirculoComponent implements OnInit {

  // propiedad para capturar el radio desde el formulario
  radio : number = 0;
 

  // variable para almacenar el resultado que viene desde el metodo calcular perimetro
  resultadoPerimetro: number | null = null;

  constructor() {  }

  ngOnInit() {
  }

  calcularPerimetroOnClick(){
    console.log("calcular")
    const circulo = new Circulo('circulo', this.radio);
    this.resultadoPerimetro = circulo.calcularPerimetro();
    console.log(circulo.calcularPerimetro())
  }
  
}
