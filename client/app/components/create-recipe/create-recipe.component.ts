import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.scss'],
    providers: [RecipeService]
})
export class CreateRecipeComponent implements OnInit {
    newRecipe = {
        title: '',
        description: ''
    };

    constructor(
        private recipeService: RecipeService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    sendRecipe() {
        this.recipeService.postRecipe(this.newRecipe).then(res => {
            if (res._id) {
                this.router.navigate(['/']);
            } else {
                // show error
                console.log(res);
            }
        });
    }

}
