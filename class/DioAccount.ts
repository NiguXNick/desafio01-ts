export abstract class DioAccount {
  private readonly name: string
  private balance: number = 0
  private status: boolean = true

  constructor(name: string){
    this.name = name
  }

  getName = (): string => {
    return this.name
  }

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      this.balance += balance
      console.log(`Depositado ${balance} com sucesso`)
    } else {
      console.log('A conta está inativa')
    }
  }

  withdraw = (balance: number): void => {
    if(this.validateStatus() && balance <= this.balance){
      this.balance -= balance
      console.log(`Sacado ${balance} com sucesso`)
    } else {
      console.log('Saldo insuficiente ou a conta está inativa')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
