import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SheetState, IonBottomSheetComponent } from 'ion-bottom-sheet';
import * as moment from 'moment';
import { WeatherInterface } from 'src/app/interface/weather-interface';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Islands } from 'src/app/utils/islands';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pageName: string = 'NhaTempo';
  sheetState = SheetState.Docked;
  transition = "0.5s ease-out";
  weatherResult: WeatherInterface;
  dailyWeather: any
  todayDate: any;
  todayWeekDay: any;
  iconUrl = environment.iconUrl;
  isLands: any = Islands;
  title: string;
  slideOpts = {
    speed: 400,
    slidesPerView: 2,
    autoHeight: true,
    //spaceBetween: 0,
  }
  moment: any = moment;

  constructor(private loader: LoaderService, private apiCallsService: ApiCallsService, private ref: ChangeDetectorRef) {
    this.todayDate = moment().format('dddd');
    this.todayWeekDay = moment().format("MMMM YY");
  }

  ngOnInit(): void {
    this.getWeather(this.isLands[6]);
  }

  getWeather(island) {
    this.loader.loaderStart();
    this.apiCallsService.getWeatherByLatAndLng(island["lat"], island["log"]).subscribe((res: WeatherInterface) => {
      this.weatherResult = res;
      this.dailyWeather = res.daily;
      this.dailyWeather.shift();
      this.title = island.name
      this.loader.loaderStop();
      this.sheetState = this.sheetState
    }, _err => {
      this.loader.loaderStop();
    })
  }

  checkboxSelectIsland(id, island) {

    for (let index = 0; index < this.isLands.length; index++) {
      if (this.isLands.id != id)
        this.isLands[index]['isChecked'] = null;
    }

    this.getWeather(island);
  }

}
