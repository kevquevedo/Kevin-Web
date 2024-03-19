import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ring } from 'ldrs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 estilo! : string;

  constructor() {
    ring.register('my-precious')
    this.cambiarColor();
  }

  ngOnInit(): void {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }

  cambiarMinimalista(){
    this.estilo = "Minimalista"
  }

  cambiarColor(){
    this.estilo = "Colors"
  }


  cambiar3erEstilo(){
    this.estilo = "3erEstilo"
  }


}
