import { Component, OnInit } from '@angular/core';
import { BankingService } from '../services/banking.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  constructor(protected bankingService:BankingService) { }

  loggedInUser:string;
  accountBalance : number;
  accountDetls = [];

  ngOnInit() {

this.loggedInUser = this.bankingService.loggedinUser;
this.accountBalance = this.bankingService.accountBalance;
this.accountDetls = this.bankingService.getAccountDetails();
  }

}
