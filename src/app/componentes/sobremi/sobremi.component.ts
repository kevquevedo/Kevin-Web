import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cards = Array.from(document.querySelectorAll(".card"));
    const cardsContainer = document.querySelector("#cards");

    cardsContainer!.addEventListener("mousemove", (e :any) => {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        (card as any).style.setProperty("--mouse-x", `${x}px`);
        (card as any).style.setProperty("--mouse-y", `${y}px`);
      }
    });
  }


}
