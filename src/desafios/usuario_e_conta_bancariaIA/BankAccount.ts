import { User } from "./User"; // importa a classe User do outro arquivo

export class BankAccount extends User {
  private balance: number;

  constructor(name: string, age: number, balance: number) {
    super(name, age);
    this.balance = balance;
  }

  depositar(value: number): void {
    if (value <= 0) {
      console.warn("ERRO: valor inválido para depósito");
      return;
    }
    this.balance += value;
  }

  sacar(value: number): boolean {
    if (value > this.balance) {
      console.warn("ERRO: saldo insuficiente!");
      return false;
    }
    this.balance -= value;
    return true;
  }

  verSaldo(): string {
    return `Cliente: ${this.name} | Idade: ${this.age} | Saldo: R$${this.balance.toFixed(2)}`;
  }
}