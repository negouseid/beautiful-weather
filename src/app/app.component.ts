import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { error } from 'util';
import {Pipe, PipeTransform} from '@angular/core';

export class MaxPipe implements PipeTransform {

  transform(value: any[], prop: string) {
    if (!Array.isArray(value) || value.length === 0 || !prop) {
      return value;
    }

    value.sort((a, b) => b[prop] - a[prop]);
    return value[0][prop];
  }
}

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform (input: number) {
    return Math.floor(input);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Beautiful Weather';
  myCity: any[];
  city: string;
  fiveForecast: any[];

  constructor(private weather: WeatherService) {}

  ngOnInit() {}

  // extract the weather data
  async getWeatherState(city: string) {
    const data = await this.weather.getForecast(city).toPromise()
      .then(this.chunks);
    this.myCity = data;
  }

  // forecast(city: string) {
  //   this.weather.fiveDayForecast(city).subscribe(
  //     data => this.fiveForecast = data,
  //   );
  // }

  // a different approach to this problem
  // get max and min
  minTemp = temps => Math.min(...temps);
  maxTemp = temps => Math.max(...temps);
  extractTemps = (hourlyTemps, key) => hourlyTemps.map(item => item.main[key]);
  // extractWeather = (weatherEffect, key) => weatherEffect.map(item => item.weather[key]);
  // dateTitle = dateOfWeek => null;

  // group the data into day
  chunks(data, size = 8) {
    const array = data.list;
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

}
