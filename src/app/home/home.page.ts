import { Component, OnInit } from '@angular/core';
import { TimeSerieModel } from '../models/time.serie.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.getWeatherForecast();
  }

  async getWeatherForecast() {

    (await this
      .service
      .list(-26.918958059880193, -48.65417161346648))
      .subscribe((value: any) => {
        console.log(value);
        let res = value.properties.timeseries.map((e: any) => TimeSerieModel.fromMap(e.data));
        console.log(res);
      });

  }

}
