import { Component } from '@angular/core';
declare var AOS: any;
import { ring } from 'ldrs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  ngOnInit() {
    window.onload = () => {
      AOS.init();
    }


      ring.register('my-precious')

  }
}
