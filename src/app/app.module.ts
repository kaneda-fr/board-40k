import '../polyfills';
import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { JoueurComponent } from './joueur/joueur.component';
import { ClassementComponent } from './classement/classement.component';
import { ClasssementparpositionPipe } from './classsementparposition.pipe';

import { FacebookModule } from 'ngx-facebook';

/**
 * Module that provides instances for all API services
 */
import { ApiModule } from './api.module';
import { AuthModule } from './auth.module';


import { MaterialModule } from './material.module';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { MessageService } from './message.service';

import {APIAuthInterceptor} from './apiauth.interceptor';
import { CreejoueurComponent } from './creejoueur/creejoueur.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    JoueurComponent,
    ClassementComponent,
    ClasssementparpositionPipe,
    StatsComponent,
    AdminComponent,
    CreejoueurComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ApiModule,
    AuthModule,
    MaterialModule,
    FacebookModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIAuthInterceptor,
    multi: true,
  },
  {
       provide: LOCALE_ID, useValue: 'fr',
    },
    MessageService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeFr, 'fr');

platformBrowserDynamic().bootstrapModule(AppModule);
