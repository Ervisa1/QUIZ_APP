import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {GameOptionsDto} from '../dtos/gameOptions.dto';
import {GameStateDto} from '../dtos/gameState.dto';
import {UserAnswerDto} from '../dtos/userAnswer.dto';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    gameState: GameStateDto = new GameStateDto(0, 0, new GameOptionsDto(0, "", 0, ""), "", [])

    submitAnswerForm = this.formBuilder.group({
        answer: '',
    });

  constructor(private dataService: DataService,
              private formBuilder: FormBuilder,
              private router: Router,
              ) { }

  ngOnInit(): void {
      this.dataService.sendGetGameState().subscribe((data: any)=>{
          console.log("Received gameState: ", data);
            if (data.currentQuestionNumber > data.gameOptions.numberOfQuestions) {
                this.goToSummary()
            } else {
                this.gameState = data;
            }
      })
  }

    onSubmit() {
        let dto: UserAnswerDto = this.submitAnswerForm.getRawValue()
        console.log("Sending user answer request: ", dto)

        this.dataService.sendPostUserAnswerRequest(dto).subscribe(resp => {
            console.log("Send post user answer response: ", resp);
            if (resp.status == 202) {
                console.log("Send post user answer response as expected, moving to next question")
                this.submitAnswerForm.reset()
                this.ngOnInit();
            }
        })
    }

    goToSummary() {
        this.router.navigate(['/summary'])
    }

}
