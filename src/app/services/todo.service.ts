import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Todo One',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }
}
