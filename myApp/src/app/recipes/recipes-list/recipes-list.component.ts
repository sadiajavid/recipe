// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recipes-list',
//   templateUrl: './recipes-list.component.html',
//   styleUrl: './recipes-list.component.css'
// })
// export class RecipesListComponent {

//   recipes: Recipe[] = [
//     new Recipe("A Test Recipe ")
//   ];
// }
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Description of the test recipe", "D:\myApp\src\assets\image\Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg")
  ];
}
