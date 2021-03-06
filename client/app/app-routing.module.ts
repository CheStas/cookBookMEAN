import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesItemComponent } from './components/recipes-item/recipes-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: RecipesComponent,
    },
    {
        path: 'recipe/:id',
        component: RecipesItemComponent
    },
    {
        path: 'create',
        component: CreateRecipeComponent
    },
    {
        path: '**',
        redirectTo: '404',
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
