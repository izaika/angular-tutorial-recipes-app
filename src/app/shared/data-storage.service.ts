import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  private dbURL = 'https://udemy-ng-http-daa1b.firebaseio.com/';

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes(): Observable<Response> {
    const token = this.authService.getToken();

    return this.http.put(`${this.dbURL}recipes.json?auth=${token}`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get(`${this.dbURL}recipes.json?auth=${token}`)
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
