import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ChargesModule } from './charges/charges.module';




const routes: Route[] = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ChargesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
