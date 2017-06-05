import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private dbURL = 'https://udemy-ng-http-daa1b.firebaseio.com/';

  constructor(private http: Http,
              private recipeService: RecipeService) {
  }

  storeRecipes(): Observable<Response> {
    return this.http.put(`${this.dbURL}recipes.json`, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(`${this.dbURL}recipes.json`)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }

}
