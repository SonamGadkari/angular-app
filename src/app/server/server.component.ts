import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
  allowdisabledAction = false;
  serverId = 10;
  serverStatus = 'offline';
  /* Getter method that returns serverStatus */
  getServerStatus() {
    return this.serverStatus;
  }
 constructor() {
    setTimeout(() => {
      this.allowdisabledAction = true;
    }, 2000);
 }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
}
