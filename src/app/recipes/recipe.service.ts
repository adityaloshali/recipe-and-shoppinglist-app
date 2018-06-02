import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Pasta',
      '1 Start Your Dough. Egg pasta is super simple ingredient wise: flour, salt, eggs and olive oil. ... 2 Whisk & Knead the Dough. ... 3 Let the Dough Rest. ... 4 Divide the Dough. ... 5 Roll the Dough. ... 6 Keep Rolling. ... 7 Slice Noodles. ... 8 Loosen the Noodles.',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/36/2048x1024/landscape-1504715566-delish-fettuccine-alfredo.jpg?resize=980:*',
      [
        new Ingredient('Pasta', 100),
        new Ingredient('Tomato', 20)
      ]),
    new Recipe('Whole Chicken',
      `Preheat the oven to gas 4, 180°C, fan 160°C. Heat half the oil in a large casserole dish on a medium heat. Add the onions and pepper and fry for 5-6 mins, until softened. Add the garlic, smoked paprika and 2 tbsp of parsley to the pan and cook for a further 2 mins. Add the wine to the pan and reduce the liquid by half before stirring in the olives and cherry tomatoes.
      Add the tinned and fresh tomatoes along with 50ml of water to the dish and bring the pot to the boil. Reduce and simmer for 10 mins uncovered. Season to taste.
      Season the chicken and drizzle over the remaining olive oil. Place the chicken in the centre of the casserole dish and put in the middle shelf of the preheated oven. Cover and cook for 1 hr 15 mins. Remove the lid and cook for a further 15 mins, uncovered, or until no pink meat remains. Remove from the oven and sprinkle over the feta.
      Meanwhile, prepare the pasta. Bring a large pan of salted water to the boil, add the pasta and cook for 6-7 mins, until just al dente. Drain the pasta and stir through the butter and parsley. Gently combine until the butter is coating the pasta.
      Serve the chicken alongside the pasta.`,
      'https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg',
      [
        new Ingredient('Whole Chicken', 1),
        new Ingredient('Onion', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
