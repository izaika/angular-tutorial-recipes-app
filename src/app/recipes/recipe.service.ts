import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg/1280px-KFC_Original_Recipe_chicken_in_bucket.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg/1280px-KFC_Original_Recipe_chicken_in_bucket.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  };
}
