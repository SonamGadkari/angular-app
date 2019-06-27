import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
  allowdisabledAction = false;
  serverId = 10;
  serverStatus = 'offline';
  currentServerStatus = 'Server is offline';
  serverEvent = 'TestServer';
  serverCreated = false;
  /* Getter method that returns serverStatus */
  getServerStatus() {
    return this.serverStatus;
  }
 constructor() {
    setTimeout(() => {
      this.allowdisabledAction = true;
    }, 2000);
 }

 onServerClick() {
    this.serverCreated = true;
    this.currentServerStatus = 'Server is now online' + 'name of the server is ' + this.serverEvent;
 }

 onServerEvent(event: Event) {
  this.serverEvent = (event.target as HTMLInputElement).value;
}


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
}
