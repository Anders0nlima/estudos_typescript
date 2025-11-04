class User{
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

}


class bankAccount extends User{
    private balance: number;

    constructor(name: string, age: number, balance: number){
        super(name, age)
        //if (balance < 0) throw new Error("Saldo inicial não pode ser negativo")
        this.balance = balance
    }


    depositar(value: number): number{
        if (value < 0 || !Number.isInteger(value)){
          console.warn("ERRO: Valor negativo ou não numero")
        }
        return this.balance += value;
    }

    sacar(value: number): string | number{
        if (this.balance < value) {
            return `ERRO: Saldo insuficiente`
        } 
        return this.balance -= value;
    }

    verSaldo(): string{
        return `Saldo Atual: ${this.balance}: Conta: ${this.name} | idade: ${this.age}`
    }
}

const conta1 = new bankAccount("Anderson", 20, 1200);

console.log(conta1.depositar(20))
console.log(conta1.sacar(2100))
console.log(conta1.verSaldo())

