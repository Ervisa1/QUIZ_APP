import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {DataService} from '../data.service';
import {CategoryDto} from '../dtos/category.dto';
import { FormBuilder } from '@angular/forms';
import {GameOptionsDto} from '../dtos/gameOptions.dto';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
    difficulties: String[] = []
    categories: CategoryDto[] = []

    startGameForm = this.formBuilder.group({
        numberOfQuestions: 5,
        difficulty: '',
        categoryId: 0,
    });

  constructor(private dataService: DataService,
              private formBuilder: FormBuilder,
              private router: Router,
              ) { }

  ngOnInit(): void {
      this.dataService.sendGetDifficultyRequest().subscribe((data: any)=>{
          console.log("Received difficulties: ", data);
          this.difficulties = data;
      })

      this.dataService.sendGetCategoriesRequest().subscribe((data: any)=>{
          console.log("Received categories: ", data);
          this.categories = data;
      })
  }

  onSubmit(): void {
      let dto: GameOptionsDto = this.startGameForm.getRawValue()
      console.log("Sending start game request: ", dto)

        this.dataService.sendPostStartGameRequest(dto).subscribe(resp => {
            console.log("Start game response: ", resp);
            if (resp.status == 201) {
                console.log("Start game response as expected, moving to actual game...")
                this.goToGame();
            }
        })
  }

    goToGame() {
        this.router.navigate(['/game'])
    }

}
