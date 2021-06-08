import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man For item',
        fechaLanzamiento: new Date(),
        precio: 7.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-09'),
        precio: 5.59
      }]
    }, 500);
  }
  title = 'front-end';
  peliculasEnCines!: { titulo: string; fechaLanzamiento: Date; precio: number; }[];

  peliculasProximosExtrenos = [{
    titulo: 'Advengers Endgame',
    fechaLanzamiento: new Date(),
    precio: 7.99
  },
  {
    titulo: 'Inception',
    fechaLanzamiento: new Date('2016-11-09'),
    precio: 5.59
  },
  {
    titulo: 'Rocky',
    fechaLanzamiento: new Date('2016-11-09'),
    precio: 5.59
  }]
  duplicarNumero(valor: number): number {
    return valor *2;
  }
}
