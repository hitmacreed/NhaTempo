import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/weather.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    //console.log(animationItem);
  }




}