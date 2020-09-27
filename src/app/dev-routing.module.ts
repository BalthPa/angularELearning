import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cours', component: HtmlComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CoursDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
