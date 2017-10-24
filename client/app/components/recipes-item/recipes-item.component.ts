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
  @Input() recipe: any[];

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
  }

}
