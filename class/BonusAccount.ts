import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  
  constructor(name: string){
    super(name)
  }

  deposit_bonus = (balance: number): void => {
    if(this.validateStatus()){
      const bonusBalance = balance + 10;
      this.deposit(bonusBalance);
      console.log(`Depositado ${balance} e bonus de 10 com sucesso`)
    } else {
      console.log('A conta está inativa')
    }
  }
}