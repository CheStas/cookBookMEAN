import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service.service';
import { RecipeService } from '../../services/recipes.service';
import { IRecipe } from '../../models/recipe';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    providers: [HttpService, RecipeService]
})
export class RecipesComponent implements OnInit {
    recipes: IRecipe[];

    constructor(
        private httpService: HttpService,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.recipeService.getRecipes().then(res => {
            this.recipes = res;
            console.log(this.recipes);
        });
    }

}
