import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderComponent } from '../views/shared/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  modal: any;

  constructor(public modalController: ModalController) { }

  async loaderStart() {
    this.modal = await this.modalController.create({
      component: LoaderComponent,
      cssClass: 'loaderClass'
    });
    return await this.modal.present();
  }


  loaderStop() {
    //setTimeout delay just for Swag
    setTimeout(() => {
      this.modal.dismiss();
    }, 1500);
  }


}
