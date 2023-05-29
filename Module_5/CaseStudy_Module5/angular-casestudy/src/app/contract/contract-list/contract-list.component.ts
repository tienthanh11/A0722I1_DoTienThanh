import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contracts = this.contractService.getAllContract();
  }
}
