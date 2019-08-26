import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class QuestionsService {


  constructor(private http : HttpClient) {
   }

  public getQuestions(){
    let arr:any;
    arr = this.http.get('/answers.json');
    console.log(arr);
    return arr;
  }

}