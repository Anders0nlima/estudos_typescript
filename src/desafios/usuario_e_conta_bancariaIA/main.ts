import { BankAccount } from "./BankAccount";

const conta1 = new BankAccount("Anderson", 20, 1000);
conta1.depositar(200);
conta1.sacar(50);
console.log(conta1.verSaldo());