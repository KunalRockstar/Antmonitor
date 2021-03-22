import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
 

   serverClickEmitter = new Subject<string>();

  constructor() { }
}
