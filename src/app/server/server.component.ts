import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online{
      color : white;
    }`]
})

export class ServerComponent {
  allowdisabledAction = false;
  serverId = 10;
  serverStatus = 'offline';
  currentServerStatus = 'Server is offline';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  /* Getter method that returns serverStatus */
  getServerStatus() {
    return this.serverStatus;
  }
 constructor() {
    setTimeout(() => {
      this.allowdisabledAction = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
 }

 getColor() {
   return this.serverStatus === 'offline' ? 'red' : 'green';
 }

 onServerClick() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.currentServerStatus = 'Server is now online' + 'name of the server is ' + this.serverName;
 }

 onserverName(event: Event) {
  this.serverName = (event.target as HTMLInputElement).value;
}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
}
