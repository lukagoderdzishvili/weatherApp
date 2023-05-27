import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public weatherData!: WeatherData;
  public cityName: string = 'Wellington';

  constructor(private weatherService: WeatherService){


  }

  ngOnInit(): void {
    this._getWeatherData(this.cityName);
    this.cityName = '';
  }

  public onSubmit(): void{
    this._getWeatherData(this.cityName);
    this.cityName = '';
  }

  private _getWeatherData(cityName: string): void{
    if(cityName.length === 0) return
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    })
  }
}
