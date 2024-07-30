import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  btnTitle = 'Subscribe';
  isSubscribed:boolean=false;

  subscribe(){
    this.isSubscribed= true;
    this.btnTitle= "Subscribed";
  }
}
