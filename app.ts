import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath')
const companyAccount: CompanyAccount = new CompanyAccount('DIO')
const bonusAccount: BonusAccount = new BonusAccount('Bonus')
companyAccount.deposit(50)
companyAccount.getLoan(100)
peopleAccount.deposit(50)
peopleAccount.withdraw(60)
peopleAccount.withdraw(30)
peopleAccount.getBalance()
peopleAccount.getName()
bonusAccount.deposit_bonus(50)
bonusAccount.deposit(50)
bonusAccount.getBalance()
bonusAccount.getName()
bonusAccount.withdraw(50)