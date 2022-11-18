import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { authReducer } from './modules/auth/store/reducers';
import { AuthEffects } from './modules/auth/store/effects';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({auth:authReducer}, {}),
    EffectsModule.forRoot([AuthEffects]),
    HotToastModule.forRoot(),
    HttpClientModule,
    TranslocoRootModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
