import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  data: any;

  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherParams = '&units=metric&APPID=7a03c26542c239ef43a3257fc4b285d2';
  // api = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534'
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={7a03c26542c239ef43a3257fc4b285d2}
  // New Key Generated 7a03c26542c239ef43a3257fc4b285d2



  fetchData(input= '') {
    const url = `${this.weatherAPI}${input}${this.weatherParams}`;
    // console.log("Called")
    return this.http.get(url)
  }
}
