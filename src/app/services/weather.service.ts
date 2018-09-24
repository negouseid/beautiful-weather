import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  fiveDayForecast(city: string, metric: 'metric' | 'imperial' = 'imperial'): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&appid=c5e03a2e380341b97751366d83c9abbd&cnt=5
      `);
  }

  // getForecast(city: string, metric: 'metric' | 'imperial' = 'imperial'): Observable<any> {
  //   return this.http.get(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=3197686768faa96b2792ffb60c24bdd0`);
  // }
}
// const url = `${'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111'}';
// return this.http.get<any>(url);
