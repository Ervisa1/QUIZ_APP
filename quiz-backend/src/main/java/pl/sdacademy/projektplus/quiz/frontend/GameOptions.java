package pl.sdacademy.projektplus.quiz.frontend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameOptions {
    private int numberOfQuestions = 5;
    private Difficulty difficulty;
    private int categoryId;
    private String categoryName;
}
