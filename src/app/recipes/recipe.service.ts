import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.salomon-foodworld.com/files/salomon/images/Produkterlebnisse/Center%20of%20the%20Plate/MEAT-SELECTION-Knusper-Schnitzel-gebraten_Freisteller_Wedges_72dpi.png',
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
      'https://avatanplus.com/files/resources/original/56f5571dc7e42153ae5c4c7b.png',
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


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    // delete this.recipes[index];
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
