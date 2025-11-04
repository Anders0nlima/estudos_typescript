class Produto{
    public nome: string;
    public preco: number;
    public quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    vender(quantidade_vedendida: number): string{
        if (quantidade_vedendida > this.quantidade){
            this.quantidade -= quantidade_vedendida
        } else{
            return `metodo não valido: quantidade insuficiente para venda!`
        }

        return `foi vendido ${quantidade_vedendida} item do produto ${this.nome}`
        
    }

    repor(quantidade_reposta: number): number{
        return this.quantidade += quantidade_reposta
    }

    mostrar_estoque(): string{
        return `Estoque atual do produtudo ${this.nome} : ${this.quantidade}`
    }


}


const produto1 = new Produto("item1", 20, 3);

console.log(produto1.vender(2))
console.log(produto1.mostrar_estoque())
console.log(produto1.repor(5))
console.log(produto1.mostrar_estoque())
console.log(produto1.vender(7))


{/*
    comentarios:
    #1 - Nomes (estilo)
    snake_case -> eu usei esse para os nomes (quantidade_reposta)
    camelCase -> por padrão tenho que usar esse quantidadeReposta)
    
    #2 - Visibilidade e encapsulamento
    isso nao pode ser public deve ser private
    public preco: number;
    public quantidade: number;

    #3 - Validações faltando
    valida numeros nagativos (isso nao pode, deve ser tratado)

    #4 - Internacionalização
    codigo em ingles

    obs: codigo ideial gerado por IA no produtoIA
    
    
    */}
