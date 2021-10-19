import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GameOptionsDto} from './dtos/gameOptions.dto';
import {UserAnswerDto} from './dtos/userAnswer.dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private REST_API_SERVER = window.origin + "/api/quiz";

    constructor(private httpClient: HttpClient) { }

    public sendGetDifficultyRequest() {
        return this.httpClient.get(this.REST_API_SERVER + "/difficulties");
    }

    public sendGetCategoriesRequest() {
        return this.httpClient.get(this.REST_API_SERVER + "/categories");
    }

    public sendPostStartGameRequest(dto: GameOptionsDto) {
        return this.httpClient.post(this.REST_API_SERVER + "/startGame", dto, {observe: 'response'});
    }

    public sendGetGameState() {
        return this.httpClient.get(this.REST_API_SERVER + "/gameState");
    }

    public sendPostUserAnswerRequest(dto: UserAnswerDto) {
        return this.httpClient.post(this.REST_API_SERVER + "/submitAnswer", dto, {observe: 'response'});
    }
}
