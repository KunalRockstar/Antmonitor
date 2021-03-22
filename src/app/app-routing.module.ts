import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ReportComponent } from './components/report/report.component';
import { ServersComponent } from './components/servers/servers.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'report', component: ReportComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'contact Us', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
