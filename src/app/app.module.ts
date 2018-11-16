import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingComponent} from './routing/routing.component';
import {RouterModule, Routes} from '@angular/router';
import {LocationComponent} from './location/location.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';
import {HttpService} from './http.service';

const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent
  },
  {
    path: 'users', component: RoutingComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    LocationComponent,
    PageNotFoundComponent,
    FormsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


