import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';
import { IRecipe } from '../../models/recipe';

@Component({
    selector: 'app-recipes-item',
    templateUrl: './recipes-item.component.html',
    styleUrls: ['./recipes-item.component.scss'],
    providers: [RecipeService]
})
export class RecipesItemComponent implements OnInit {
    recipe: IRecipe;
    editMode = false;

    constructor(
        private route: ActivatedRoute,
        private recipeSerice: RecipeService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.recipeSerice.getRecipeById(this.route.snapshot.paramMap.get('id')).then(res => {
            if (res._id) {
                this.recipe = res;
            } else {
                this.router.navigate(['/404']);
            }
        });
        console.log(this.recipe);
    }

    delete() {
        this.recipeSerice.deleteById(this.recipe._id).then(res => {
            console.log(res);
            if (res.ok) {
                this.recipe = undefined;
            } else {
                // error
                console.log(res);
            }
        });
    }

    edit() {
        if (!this.editMode) {
            this.editMode = true;
        } else {
            console.log(this.recipe);
            const body = {
                title: this.recipe.title,
                description: this.recipe.description
            };

            this.recipeSerice.updateRecipe(this.recipe._id, body).then(res => {
                console.log(res);
                this.editMode = false;
            });
        }
    }

}
