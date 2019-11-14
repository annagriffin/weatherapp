import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviornment.dist';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  data: object;

  constructor() { }

  getResults(city: string) : any {
    var key = environment.apikey;
    this.data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson;

      });

      return this.data
      
  }
}

