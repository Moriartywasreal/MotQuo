import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  galleryType = 'regular';
 //constructor(public navCtrl: NavController) { }


 constructor(private modalController: ModalController) { }

   openPreview(img) {
     this.modalController.create({
       component: ModalPagePage,
       componentProps: {
         img: img
       }
     }).then(modal => {
       modal.present();
     });
   }
}
