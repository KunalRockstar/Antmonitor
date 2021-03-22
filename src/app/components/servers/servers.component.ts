import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  activeServer: any ='abc';
  activeServerSub: Subscription;

  constructor(private _commonService : CommonServiceService, private _eventEmitter : EventEmitterService) { }

  ngOnInit(): void {
    this.activeServerSub =  this._eventEmitter.serverClickEmitter.subscribe(data => {
      this.activeServer = data;
    });
  }

}
