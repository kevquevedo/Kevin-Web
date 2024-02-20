import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", function(event){
      var scroll = this.scrollY;

      document.getElementById("box1")!.style.top = scroll+"px";
      console.log("box1: " + scroll + "px")

      document.getElementById("box2")!.style.top = scroll/1.5+"px";
      console.log("box2: " + scroll/1.5 + "px")

      document.getElementById("box3")!.style.top = scroll/3+"px";
      console.log("box3: " + scroll/3 + "px")
    })
  }

}
