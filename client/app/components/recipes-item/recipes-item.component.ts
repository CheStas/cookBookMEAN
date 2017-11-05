import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
  providers: [RecipeService]
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private recipeSerice: RecipeService
  ) { }

  ngOnInit() {
    if (!this.recipe) {
      this.recipeSerice.getRecipeById(this.route.snapshot.paramMap.get('id'), res => {
        this.recipe = res;
      });
    }
    console.log(this.recipe);
  }

  delete() {
    this.recipeSerice.deleteById(this.recipe._id, res => {
      console.log(res);
      if (res.ok) {
          this.recipe = undefined;
      } else {
        console.log(res);
      }
    });
  }

  edit() {
      if (!this.editMode) {
          this.editMode = true;
      } else {
          console.log(this.recipe);
          this.recipeSerice.updateRecipe(this.recipe._id, {title: this.recipe.title, description: this.recipe.description}, res => {
              console.log(res);
              this.editMode = false;
          });
      }
  }

}
