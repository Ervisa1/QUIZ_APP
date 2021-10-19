package pl.sdacademy.projektplus.quiz.database.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity(name = "PLAYERS")
public class PlayerEntity {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    public PlayerEntity(String name) {
        this.name = name;
    }

    public PlayerEntity() {

    }
}
