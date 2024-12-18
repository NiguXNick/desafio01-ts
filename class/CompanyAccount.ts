import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string){
    super(name)
  }

  getLoan = (emprestimo: number): void => {
    if (this.validateStatus()) {
      this.deposit(emprestimo);
      console.log(`Empréstimo de ${emprestimo} adicionado com sucesso`)
    } else {
      console.log('A conta está inativa')
    }
  }
}
