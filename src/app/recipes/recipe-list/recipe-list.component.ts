import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg/1280px-KFC_Original_Recipe_chicken_in_bucket.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg/1280px-KFC_Original_Recipe_chicken_in_bucket.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
