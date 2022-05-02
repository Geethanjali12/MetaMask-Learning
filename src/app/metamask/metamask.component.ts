import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss']
})
export class MetamaskComponent implements OnInit {

  ethereum: any;
  walletAdd: any;
  chainNetwork: any;

  constructor() { }

  ngOnInit(): void {
  }

  openMetaMask = async () => {
    this.ethereum = window['ethereum'];
    if (typeof this.ethereum !== 'undefined') {
      console.log('metamask installed');
    }
    const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
    this.walletAdd = accounts[0];
    console.log(accounts);
  }

  setChainId = async () => {
    const chainId = await this.ethereum.request({ method: 'eth_chainId' });
    this.chainNetwork = chainId[0];
    console.log(chainId);
  }
 
}
