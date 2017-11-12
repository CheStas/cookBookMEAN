import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { IRecipe } from '../models/recipe';

@Injectable()
export class RecipeService {

    constructor(private httpService: HttpService) { }

    getRecipes(): Promise<IRecipe[]> {
        const sendData = {
            url: '/api/recipes/',
            method: 'GET'
        };

        return this.httpService.sendRequest(sendData);
    }

    getRecipeById(id): Promise<IRecipe>  {
        const sendData = {
            url: '/api/recipes/' + id,
            method: 'GET'
        };

        return this.httpService.sendRequest(sendData);
    }

    updateRecipe(id, body): Promise<any>  {
        const sendData = {
            url: '/api/recipes/' + id,
            method: 'PUT',
            body: body
        };

        return this.httpService.sendRequest(sendData);
    }

    postRecipe(body): Promise<IRecipe>  {
        const sendData = {
            url: '/api/recipes/',
            method: 'POST',
            body: body
        };

        return this.httpService.sendRequest(sendData);
    }

    deleteById(id): Promise<any>  {
        const sendData = {
            url: '/api/recipes/' + id,
            method: 'DELETE'
        };

        return this.httpService.sendRequest(sendData);
    }
}
