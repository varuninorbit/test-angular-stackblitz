import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { QuestionComponent } from './page/question/question.component';
import { NavigationComponent } from './page/question/navigation/navigation.component';
import { StatsComponent } from './page/stats/stats.component';
import { InlineComponent } from './inline.component';

import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { QuestionsService } from './page/question/questions.service';

@NgModule({
  imports:      [ 
    HttpClientModule,
    BrowserModule, FormsModule , 
    MaterialModule, BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent, 
    PageComponent, QuestionComponent, 
    NavigationComponent, StatsComponent,
    InlineComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [ QuestionsService ]
})
export class AppModule { }
