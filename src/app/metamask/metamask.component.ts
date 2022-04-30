import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss']
})
export class MetamaskComponent implements OnInit {

  ethereum:any;
  walletAdd:any;
  chainId:any;
  chainNetwork:any;

  constructor() { }


  openMetaMask = async () => {
    this.ethereum = window['ethereum'];
    if (typeof this.ethereum !== 'undefined') {
      console.log('metamask installed');
    }
    const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
    this.walletAdd = accounts[0];
    console.log(accounts);
  }

 public setChainId() {
    this.ethereum.request({ method: 'eth_chainId' }).then((res)=>{
      console.log(res);
      const networkId = res;
      this.setNetwork(networkId);
    })    
    
  }

  public setNetwork(id){
    switch(id)
 {
      case '0x1':
        this.chainNetwork = 'Ethereum Main Network (Mainnet)';
        break;
      case '0x3':
        this.chainNetwork = 'Ropsten Test Network';
        break;
        case '0x4':
          this.chainNetwork = 'Rinkeby Test Network';
          break;
        case '0x5':
          this.chainNetwork = 'Goerli Test Network';
          break;
          case '0x2a':
            this.chainNetwork = 'Kovan Test Network';
             break;
          default:
            this.chainNetwork = 'unknown';
    }
     
  }
  ngOnInit(): void {
  }
}
