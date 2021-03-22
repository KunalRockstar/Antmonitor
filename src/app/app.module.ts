import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { AlertComponent } from './components/alert/alert.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReportComponent } from './components/report/report.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ServersComponent } from './components/servers/servers.component';


registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    AlertComponent,
    DashboardComponent,
    ContactComponent,
    ReportComponent,
    PagenotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: hi_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
