import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class = 'app'>
    {{ title + '!!!' }}
    <h1> {{ title + 'title in h1 tag ' }}</h1>
    <h1 [innerHTML] = "title"></h1>
    <div> 
      {{ numberOne }}
      <br>
      {{ numberTwo + numberOne }}

      <br>
      <br>
      <img [src] = "img">
      
      <button (click)="handleClick(username.value)" >
        Get Value
      </button>

      <input #username
            type="text" 
            [(ngModel)] = "name">

      <div *ngIf= "name.length" > 
         Searching for: {{ name }}  
      </div>
    </div>


    <div>
      {{ isHappy ? ':)' : ':(' }}
    </div>

  </div>
  `
})

export class AppComponent{
  title: string
  numberOne: number =1;
  numberTwo: number =2;
  isHappy: boolean = true;
  
  img: string = 'favicon.ico';
  name: string = 'Martin';

  constructor(){
    this.title = 'Ultimate Angular';
  }

  handleClick(username: string){
    // this.name = 'Gelev';

    console.log(username)
  }

  
 

}