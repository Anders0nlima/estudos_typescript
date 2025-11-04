class User {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class BankAccount extends User {
  private balance: number;

  constructor(name: string, age: number, balance: number) {
    super(name, age);
    if (balance < 0) throw new Error("Saldo inicial não pode ser negativo");
    this.balance = balance;
  }

  depositar(value: number): void {
    if (value <= 0) {
      console.warn("ERRO: valor de depósito inválido");
      return;
    }
    this.balance += value;
    console.log(`Depósito de R$${value.toFixed(2)} realizado com sucesso!`);
  }

  sacar(value: number): boolean {
    if (value <= 0) {
      console.warn("ERRO: valor de saque inválido");
      return false;
    }
    if (this.balance < value) {
      console.warn("ERRO: saldo insuficiente!");
      return false;
    }
    this.balance -= value;
    console.log(`Saque de R$${value.toFixed(2)} realizado com sucesso!`);
    return true;
  }

  verSaldo(): string {
    return `Cliente: ${this.name} | Idade: ${this.age} | Saldo Atual: R$${this.balance.toFixed(2)}`;
  }

  getSaldo(): number {
    return this.balance;
  }
}

// Teste:
const conta1 = new BankAccount("Anderson", 20, 1200);

conta1.depositar(20.5);
conta1.sacar(2100);
console.log(conta1.verSaldo());
conta1.sacar(500);
console.log(conta1.getSaldo());