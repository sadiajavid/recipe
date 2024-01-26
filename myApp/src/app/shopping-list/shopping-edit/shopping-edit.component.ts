import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from '../../../../shared/ingredients-model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") nameInputRef!:ElementRef;
  @ViewChild("amountInput") amountInputRef!:ElementRef;
@Output() addIngredient=new EventEmitter<ingredient>()
 onAddItem(){
const ingName=this.nameInputRef.nativeElement.value;
const ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient=new ingredient(ingName,ingAmount)

this.addIngredient.emit(newIngredient)
 }
}
