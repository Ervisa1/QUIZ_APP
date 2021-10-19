export class GameOptionsDto {
    numberOfQuestions: number;
    difficulty: string;
    categoryId: number;
    categoryName: string;

    constructor(numberOfQuestions: number, difficulty: string, categoryId: number, categoryName: string) {
        this.numberOfQuestions = numberOfQuestions;
        this.difficulty = difficulty;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}
