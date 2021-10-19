package pl.sdacademy.projektplus.quiz.services;

import org.junit.jupiter.api.Test;
import pl.sdacademy.projektplus.quiz.dto.CategoryQuestionCountInfoDto;
import pl.sdacademy.projektplus.quiz.frontend.Difficulty;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static pl.sdacademy.projektplus.quiz.frontend.Difficulty.*;

class QuizDataServiceTest {

    @Test
    void calculateEachDifficultyQuestionCount_basicEasy() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(5, 17, 13);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, EASY, given);

        assertEquals(5, result.get(EASY));
        assertEquals(15, result.get(MEDIUM));
        assertNull(result.get(HARD));
    }

    @Test
    void calculateEachDifficultyQuestionCount_basicMedium() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(5, 17, 13);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, MEDIUM, given);

        assertEquals(1, result.get(EASY));
        assertEquals(17, result.get(MEDIUM));
        assertEquals(2, result.get(HARD));
    }

    @Test
    void calculateEachDifficultyQuestionCount_basicHard() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(5, 17, 13);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, HARD, given);

        assertNull(result.get(EASY));
        assertEquals(7, result.get(MEDIUM));
        assertEquals(13, result.get(HARD));
    }

    @Test
    void calculateEachDifficultyQuestionCount_balancingIgnored() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(15, 5, 9);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, MEDIUM, given);

        assertEquals(6, result.get(EASY));
        assertEquals(5, result.get(MEDIUM));
        assertEquals(9, result.get(HARD));
    }

    @Test
    void calculateEachDifficultyQuestionCount_balancingApplied() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(15, 5, 19);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, MEDIUM, given);

        assertEquals(7, result.get(EASY));
        assertEquals(5, result.get(MEDIUM));
        assertEquals(8, result.get(HARD));
    }

    @Test
    void calculateEachDifficultyQuestionCount_emptyPrimaryDifficulty() {
        CategoryQuestionCountInfoDto given = new CategoryQuestionCountInfoDto(0, 17, 13);
        Map<Difficulty, Integer> result = QuizDataService.calculateEachDifficultyQuestionCount(20, EASY, given);

        assertEquals(0, result.get(EASY));
        assertEquals(17, result.get(MEDIUM));
        assertEquals(3, result.get(HARD));
    }

}