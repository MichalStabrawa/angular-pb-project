import { ScoresService } from './scores.service';
import { Component, OnInit } from '@angular/core';
import { Score } from './score';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})
export class ScoresComponent implements OnInit {
  public scores: Score[] = [];

  constructor(private _scoresService: ScoresService) {}

  ngOnInit(): void {
    this._scoresService.getScores().subscribe((result) => {
      this.scores = result.slice(0, 10);
    });
  }

  public sortScores(direction: 'asc' | 'desc') {
    this.scores = orderBy(this.scores, ['score'], [direction]);
  }
}
