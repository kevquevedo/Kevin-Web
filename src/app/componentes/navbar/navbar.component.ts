import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

const miElemento = document.getElementById("navegador");

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  idioma! : string;
  idiomaBandera! : string;


  someMethod() {
    this.trigger.openMenu();
  }

  constructor(
    private router:Router
  ) {

    this.cambiarEspanol();


    if(this.router.url == '/habilidades'){

      console.log(miElemento)
      console.log(document.querySelectorAll(".navegador"))
    }

    document.querySelectorAll(".navegador")
  }

  ngOnInit(): void {
  }

  irInicio(){
    this.router.navigateByUrl('');
  }

  irProyectos(){
    this.router.navigateByUrl('proyectos');
  }

  irHabilidades(){
    this.router.navigateByUrl('habilidades');
  }

  irSobremi(){
    this.router.navigateByUrl('sobremi');
  }

  irContacto(){
    this.router.navigateByUrl('contacto');
  }

  cambiarIngles(){
    this.idioma = 'Inglés';
    this.idiomaBandera = '../../../assets/banderas/inglaterra.svg'
  }

  cambiarPortugues(){
    this.idioma = 'Portugués';
    this.idiomaBandera = '../../../assets/banderas/portugal.svg'
  }

  cambiarEspanol(){
    this.idioma = 'Español';
    this.idiomaBandera = '../../../assets/banderas/espana.svg'
  }




}
