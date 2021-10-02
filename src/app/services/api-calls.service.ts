import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherInterface } from '../interface/weather-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  baseURL = environment.baseURL;
  appID = environment.appID;

  constructor(private http: HttpClient) { }

  getWeatherByName(name: string, units = 'metric') {
    return this.http.get<WeatherInterface>(`${this.baseURL}weather?q=${name}&units=${units}&appid=${this.appID}`);
  }

  getWeatherByLatAndLng(lat: number, lon: number, units = 'metric', lang = "pt_br") {
    return this.http.get(`${this.baseURL}onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&exclude=minutely,hourly&appid=${this.appID}`);
  }
}
