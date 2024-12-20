import { Component } from '@angular/core';
import { IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect, FormsModule, CommonModule, CirculoComponent, TrianguloComponent],
})
export class HomePage {

  figuraSeleccionada = "";
  constructor(private router: Router){}


  onFigura(){
    console.log(this.figuraSeleccionada)
  }
}
