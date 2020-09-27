import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { TextComponent } from './text/text.component';
import { DevRoutingModule } from './dev-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CoursDetailComponent,
    TextComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
