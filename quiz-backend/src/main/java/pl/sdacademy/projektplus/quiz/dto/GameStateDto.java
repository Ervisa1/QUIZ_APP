package pl.sdacademy.projektplus.quiz.dto;

import lombok.Data;
import pl.sdacademy.projektplus.quiz.frontend.GameOptions;

import java.util.List;

@Data
public class GameStateDto {
    private final GameOptions gameOptions;
    private final int currentQuestionNumber;
    private final int points;

    private final String currentQuestionText;
    private final List<String> currentQuestionAnswers;
}
