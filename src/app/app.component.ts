import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _commonService : CommonServiceService){

  }
  isCollapsed = false;
  servers: any[] = ['Kunal','Gaurav', 'Surya'];

  onServerClick(serverName: string){
    this._commonService.setServerName(serverName);

  }

}
