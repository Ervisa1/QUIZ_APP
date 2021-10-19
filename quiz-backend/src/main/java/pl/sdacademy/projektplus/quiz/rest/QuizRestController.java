package pl.sdacademy.projektplus.quiz.rest;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.sdacademy.projektplus.quiz.dto.CategoriesDto.CategoryDto;
import pl.sdacademy.projektplus.quiz.dto.GameStateDto;
import pl.sdacademy.projektplus.quiz.frontend.Difficulty;
import pl.sdacademy.projektplus.quiz.frontend.GameOptions;
import pl.sdacademy.projektplus.quiz.frontend.UserAnswer;
import pl.sdacademy.projektplus.quiz.services.OngoingGameService;
import pl.sdacademy.projektplus.quiz.services.QuizDataService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
@Log
public class QuizRestController {
    private final QuizDataService quizDataService;
    private final OngoingGameService ongoingGameService;

    @GetMapping("/difficulties")
    public Difficulty[] getDifficulties() {
        return Difficulty.values();
    }

    @GetMapping("/categories")
    public List<CategoryDto> getCategories() {
        return quizDataService.getQuizCategories();
    }

    @PostMapping("/startGame")
    public ResponseEntity<?> startGame(@RequestBody GameOptions gameOptions) {
        final Optional<CategoryDto> category = quizDataService.getQuizCategories().stream().filter(cat -> cat.getId() == gameOptions.getCategoryId()).findFirst();
        final GameOptions newGameOptions = new GameOptions(gameOptions.getNumberOfQuestions(), gameOptions.getDifficulty(), gameOptions.getCategoryId(), category.orElse(new CategoryDto()).getName());
        log.info("Starting new game with parameters: " + newGameOptions);
        ongoingGameService.init(newGameOptions);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/gameState")
    public GameStateDto getGameState() {
        return ongoingGameService.getCurrentGameState();
    }

    @PostMapping("/submitAnswer")
    public ResponseEntity<?> startGame(@RequestBody UserAnswer userAnswer) {
        log.info("Received answer: " + userAnswer);
        ongoingGameService.checkAnswerForCurrentQuestionAndUpdatePoints(userAnswer.getAnswer());
        ongoingGameService.proceedToNextQuestion();
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

}
