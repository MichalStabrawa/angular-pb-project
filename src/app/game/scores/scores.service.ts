import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from './score';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  constructor(private http: HttpClient) {}

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>('scores/tetris');
  }
}
