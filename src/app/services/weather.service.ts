import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _url: string = 'https://open-weather13.p.rapidapi.com/city/';
  private _hostHeaderName: string = 'X-RapidAPI-Host';
  private _hostHeaderValue: string = 'open-weather13.p.rapidapi.com';
  private _headerKeyName: string = 'X-RapidAPI-Key';
  private _headerKeyValue: string = '37ccb98e22mshb0d1503174d7758p15a31ejsne549aab19b0b';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this._url + cityName, {
      headers: new HttpHeaders()
      .set(this._hostHeaderName, this._hostHeaderValue)
      .set(this._headerKeyName, this._headerKeyValue),
      params: new HttpParams()
      .set('units', 'metric')
      .set('mode', 'json')
    }) 
  }
}
