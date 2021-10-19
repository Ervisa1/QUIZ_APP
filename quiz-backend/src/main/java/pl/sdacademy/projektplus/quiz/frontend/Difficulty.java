package pl.sdacademy.projektplus.quiz.frontend;

import org.thymeleaf.expression.Sets;

import java.util.*;

public enum Difficulty {
    EASY,
    MEDIUM,
    HARD;

    public Difficulty getClosestDifficulty() {
        switch (this) {
            case EASY:
                return MEDIUM;
            case MEDIUM:
                return HARD;
            case HARD:
                return MEDIUM;
        }
        return null;
    }

    public static Difficulty calculateNextDifficulty(Collection<Difficulty> difficulties) {
        if (difficulties == null || difficulties.isEmpty()) {
            return null;
        }
        if (difficulties.size() == 1) {
            return difficulties.iterator().next().getClosestDifficulty();
        }
        EnumSet<Difficulty> missingDifficulties = EnumSet.complementOf(EnumSet.copyOf(difficulties));
        if (missingDifficulties.isEmpty()) {
            return null;
        } else {
            return missingDifficulties.iterator().next();
        }
    }

}
