import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
 
  recipes: Recipe[] = [
    new Recipe(" A Test Recipe", "description", "/assets/image/recipe.jpg"),

    new Recipe(" A  Recipe", "description", "/assets/image/recipe.jpg"),

    new Recipe("new recipe", "description", "/assets/image/recipe.jpg")

  ]
  
}
