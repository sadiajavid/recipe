import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  evennumber=[2,4,6,8]
  oddnumber=[1 ,3,5,7,9]
onClick=false;
}
