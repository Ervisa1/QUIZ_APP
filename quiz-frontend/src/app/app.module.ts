import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import { GameComponent } from './game/game.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent,
    GameComponent,
    SummaryComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
