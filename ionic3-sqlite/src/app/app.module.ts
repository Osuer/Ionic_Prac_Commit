import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';

import {AddDataPage} from './pages/add-data/add-data.page'
//import {AddDataPage} from './pages/add-data/add-data.page'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    Toast,
    AddDataPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
