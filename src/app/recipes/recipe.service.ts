import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Lemon', 2),
        new Ingredient('Egg', 1),
        new Ingredient('Parsley', 3),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say',
      'https://sirgo.org/images/burger-png-9.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Salad', 3),
        new Ingredient('Bacon', 1),
        new Ingredient('Ketchup', 1)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
