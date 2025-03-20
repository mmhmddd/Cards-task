import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  
  private url = 'https://forkify-api.herokuapp.com/api/search?q=pizza';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    console.log('Fetching data from API');
    return this.http.get(this.url); 

}


}
