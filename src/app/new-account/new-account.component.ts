import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //constructor(private loggingService: LoggingService, private accountsService:AccountsService){}
  constructor(private accountsService:AccountsService){

    this.accountsService.statusUpdated.subscribe(
      (status:string)=>{alert('New Status:'+status)}
    );
     //Listrening to the event emitted in Account Componenet using Account Service
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
     // this.loggingService.logStatusChange(accountStatus);

    this.accountsService.addAccount(accountName,accountStatus);
 
  }
}
