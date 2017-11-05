import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service.service';
import { RecipeService } from '../../services/recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [HttpService, RecipeService]
})
export class RecipesComponent implements OnInit {
    recipes;
    newRecipe = {
        title: '',
        description: ''
    };

    constructor(
        private httpService: HttpService,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.recipeService.getRecipes(res => {
            this.recipes = res;
        });
    }

    sendRecipe() {
        this.recipeService.postRecipe(this.newRecipe, (res) => {
            if (res._id) {
                this.recipes.push(res);
            } else {
                console.log(res);
            }
        });

    }
}
