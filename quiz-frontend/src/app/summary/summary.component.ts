import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {GameOptionsDto} from '../dtos/gameOptions.dto';
import {GameStateDto} from '../dtos/gameState.dto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    gameState: GameStateDto = new GameStateDto(0, 0, new GameOptionsDto(0, "", 0, ""), "", [])

    constructor(private dataService: DataService,
              private router: Router,) { }

  ngOnInit(): void {
      this.dataService.sendGetGameState().subscribe((data: any)=>{
          console.log("Received gameState: ", data);
          this.gameState = data;
      })
  }
}
