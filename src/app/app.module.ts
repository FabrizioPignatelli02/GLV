import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EpisodiComponent } from './components/episodi/episodi.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { UltimoEpisodioComponent } from './components/ultimo-episodio/ultimo-episodio.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "episodi",
    component: EpisodiComponent
  },
  {
    path: "chiSiamo",
    component: ChiSiamoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EpisodiComponent,
    ChiSiamoComponent,
    UltimoEpisodioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
