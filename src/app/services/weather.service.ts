import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private path: string = 'https://api.met.no/weatherapi/locationforecast/2.0/compact';

  constructor(private http: HttpClient) { }

  async list(lat: number, long: number) {
    let req: string = this.path;
    req += '?';
    req += 'lat=' + lat.toString();
    req += '&lon=' + long.toString();
    return this.http.get(req);
  }
}
