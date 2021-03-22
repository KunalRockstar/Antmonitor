import { Injectable } from '@angular/core';
import { EventEmitterService } from './event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  serverClick: string;

  constructor(private _eventEmitter : EventEmitterService) { }

  setServerName(serverName : string){
    this.serverClick = serverName;
    this._eventEmitter.serverClickEmitter.next(this.serverClick);

  }

  getSerName(){
    return this.serverClick;
  }
}
