import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SerialPortService {

  
  private socket: SocketIOClient.Socket;

  constructor() { 
    const uri= 'ws://localhost:3000';
    this.socket= io(uri);
  }

  listen(eventName: string){
    return new Observable((suscriber) => {
      this.socket.on(eventName, (data) =>{
        suscriber.next(data);
      })
    });
  }

  emit(eventName:string, data:any){
    console.log('Emitting : ' + data)

    this.socket.emit(eventName,data);
  }
  
}
