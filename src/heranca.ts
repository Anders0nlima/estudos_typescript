class Pessoa {
    nome: string;
    age: number;

    constructor(nome: string, age: number){
        this.nome = nome
        this.age = age
    }

    comprimentar(nome: string){
        console.log(`Ola, ${nome}`)

    }

}

interface Necessidades {
    comer(): void
}

class Usuario extends Pessoa implements Necessidades{
    comer(): void {
        console.log("Comeu!")
    }
    
}

const user = new Usuario("Anderson", 20);

console.log(user.nome)
console.log(user.comer)