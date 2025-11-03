class User{
    public nome: string
    private age: number

    constructor(nome: string, age: number){
        this.nome = nome
        this.age = age
    }

}

const usuario = new User("Anderson", 20);

console.log(usuario.nome)