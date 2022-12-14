import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {HomeComponent} from './home.component';
import {ApiService} from '../../services/api/api.service';
import { SongComponent } from 'src/app/components/song/song.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule
  ],
  providers: [ApiService],
  exports: [HomeComponent],
  declarations: [HomeComponent, SongComponent]
})
export class HomeModule {
}
