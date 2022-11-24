import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'cincuentauno-app',
  templateUrl: './cincuentaUno.component.html',
  styleUrls: ['./cincuentaUno.component.css'],
})
export class cincuentaUnoComponent implements OnInit {
  @Input() minimo: number = 1;
  @Input() maximo: number = 1;
  numeroActual: number = 1; 

  ngOnInit() {
    this.numeroActual=this.minimo;


  }
  incrementarNumero (){
    if(this.numeroActual<this.maximo){
      this.numeroActual ++;
    }
  } 
  decrementarNumero(){
    if(this.numeroActual>=this.minimo){
      this.numeroActual --;
    }
  }
  fijar(v:number){
    if(v>=this.minimo && v<=this.maximo){
      this.numeroActual=v

    }
  }
  
}
