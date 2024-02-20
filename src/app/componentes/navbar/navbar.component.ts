import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const miElemento = document.getElementById("navegador");

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router
  ) {

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

}
