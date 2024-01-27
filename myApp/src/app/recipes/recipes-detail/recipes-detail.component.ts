// import { Component, Input } from '@angular/core';
// import { Recipe } from '../recipe.model';

// @Component({
//   selector: 'app-recipes-detail',
//   templateUrl: './recipes-detail.component.html',
//   styleUrl: './recipes-detail.component.css'
// })
// export class RecipesDetailComponent {
// recipe!:Recipe

// }
// recipes-detail.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
 @Input() recipe:Recipe;
}
