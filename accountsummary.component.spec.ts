import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsummaryComponent } from './accountsummary.component';
import { BankingService } from '../services/banking.service';
import { Observable } from 'rxjs';

describe('AccountsummaryComponent', () => {
  let component: AccountsummaryComponent;
  let fixture: ComponentFixture<AccountsummaryComponent>;
 let bankingService: BankingService = new BankingService();
  bankingService.loggedinUser = 'hcl';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsummaryComponent ]
    })
    
  }));

  beforeEach(() => {
    
    component = new AccountsummaryComponent(bankingService) ;
    
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInIt', () => {
    
    spyOn(bankingService,'loggedinUser').and.returnValue('HCL');
    spyOn(bankingService,'accountBalance').and.returnValue('500');

    component.ngOnInit();
  });

 
});
