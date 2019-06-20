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

    <h3>Airline passengers 1</h3>
    <div>
      <ul>
        <li *ngFor = "let passenger of passengers; let i = index;" >
          <span
           class="status"
            [style.backgroundColor] = "(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
    </div>

    <h3>Airline passengers 2  (with ng-template) </h3>
    <div>
      <ul>
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
          <span
          class = "status"
          [style.backgroundColor] = "(passenger.checkedIn? '#2ecc71' : '#c0392b' ) " ></span>
            {{ i }}: {{ passenger.fullName }} 
          </li>
        </ng-template>
      </ul>
    </div>

    <h3>Airline passengers 3   </h3>
    <div>
      <ul>
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
          <span
          class = "status"
          [ngStyle] = "{ backgroundColor: passenger.checkedIn? '#2ecc71' : '#c0392b'}" >
          </span>
            {{ i }}: {{ passenger.fullName }} 
          </li>
        </ng-template>
      </ul>
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

  passengers: Passengers[] = [
    {
      id: 1,
      fullName: 'Martin',
      checkedIn: true
    },{
      id: 2,
      fullName: 'Martin G',
      checkedIn: false
    },{
      id: 3,
      fullName: 'Gelev3',
      checkedIn: true
    }
]

  constructor(){
    this.title = 'Ultimate Angular';
  }

  handleClick(username: string){
    // this.name = 'Gelev';

    console.log(username)
  }
}

 interface Passengers{
  id: number,
  fullName: string,
  checkedIn: boolean
}