import { ScoresService } from './game/scores/scores.service';
import { StorageService } from './storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './game/scores/scores.component';
import { APIInterceptor } from './api.interceptor';

@NgModule({
  declarations: [AppComponent, FormComponent, GameComponent, ScoresComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: 'A', component: FormComponent },
      { path: 'B/:color', component: GameComponent },
      { path: '**', redirectTo: '/A' },
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    StorageService,
    ScoresService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
