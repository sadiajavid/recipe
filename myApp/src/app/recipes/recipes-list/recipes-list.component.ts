import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected=new EventEmitter()
recipes:Recipe[]=[
  new Recipe(" A Test Recipe","description","/assets/image/recipe.jpg")
]
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit()
}
 
}
