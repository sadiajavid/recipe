// import { Component } from '@angular/core';
// import { Recipe } from './recipe.model';

// @Component({
//   selector: 'app-recipes',
//   templateUrl: './recipes.component.html',
//   styleUrl: './recipes.component.css'
// })
// export class RecipesComponent {

// selectedRecipe!:Recipe;

// }
// recipes.component.ts

import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  onRecipeSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
