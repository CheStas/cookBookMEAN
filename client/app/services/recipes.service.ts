import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';

@Injectable()
export class RecipeService {

    constructor(private httpService: HttpService) { }

    getRecipes(cb) {
        const sendData = {
            url: '/api/recipes/',
            method: 'GET'
        };

        this.httpService.sendRequest(sendData)
            .then(data => {
                cb(data);
            });
    }

    getRecipeById(id, cb) {
        const sendData = {
            url: '/api/recipes/' + id,
            method: 'GET'
        };

        this.httpService.sendRequest(sendData)
            .then(data => {
                cb(data);
            });
    }

}
