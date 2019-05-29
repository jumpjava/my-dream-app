import { EventEmitter } from '@angular/core';

import {Recipe} from './recipe.model'

export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        
        new Recipe('1.Aloo Gobi','Vegetarian',
                  'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.',
                  'https://recipes.timesofindia.com/photo/54693711.cms'),
                  
        new Recipe('2.Aloo Tikki','Vegetarian',
        ' Patties of potato mixed with some vegetables fried',
        'https://smedia2.intoday.in/aajtak/images/stories/082017/aloo-tikki-pakwangali_520_082217081237.jpg'),

        new Recipe('3.Amritsari Fish','Non-Vegetarian',
        'Fried fish made with curry, ginger and garlic',
        'http://onedaycart.com/odcb/wp-content/uploads/2015/08/Amritsari-Fish-Pan-Fry.jpg')
  ];

getRecipes(){
    return this.recipes.slice();
}
  

}