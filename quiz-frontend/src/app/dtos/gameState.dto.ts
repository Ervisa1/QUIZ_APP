import {GameOptionsDto} from './gameOptions.dto';

export class GameStateDto {
    currentQuestionNumber: number;
    points: number;
    gameOptions: GameOptionsDto;
    currentQuestionText: string;
    currentQuestionAnswers: string[];

    constructor(currentQuestionNumber: number, points: number, gameOptions: GameOptionsDto, currentQuestionText: string, currentQuestionAnswers: string[]) {
        this.currentQuestionNumber = currentQuestionNumber;
        this.points = points;
        this.gameOptions = gameOptions;
        this.currentQuestionText = currentQuestionText;
        this.currentQuestionAnswers = currentQuestionAnswers;
    }
}
