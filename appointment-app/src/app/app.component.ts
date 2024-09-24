import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-app';
  items: string[] = ['item1', 'item2'];
  
  // this is how to do a function
  log(text: string) : void {
    var message = 'Message' + text;
    console.log(message);
  }

  log1() {
    this.log('a');
    this.log('b');
  }
}
