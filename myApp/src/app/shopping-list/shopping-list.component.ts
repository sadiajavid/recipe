import { Component } from '@angular/core';
import { ingredient } from '../../../shared/ingredients-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
ingredients:ingredient[]=[
  new ingredient("apple",500),
  new ingredient("tomatoes",300),
  new ingredient("potatoes",300),
  new ingredient("onion",400)
]
onIngredientAdded(ingredient:ingredient){
this.ingredients.push(ingredient)
}
}
