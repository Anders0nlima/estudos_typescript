class Produto {
  public nome: string;
  public preco: number;
  private quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    if (preco < 0) throw new Error("Preço não pode ser negativo");
    if (!Number.isInteger(quantidade) || quantidade < 0) throw new Error("Quantidade deve ser inteiro não-negativo");

    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  // getter para consultar estoque
  public getEstoque(): number {
    return this.quantidade;
  }

  // vende e retorna true se a venda foi efetuada, false caso contrário
  public vender(quantidadeVendida: number): boolean {
    if (!Number.isInteger(quantidadeVendida) || quantidadeVendida <= 0) {
      console.warn("Quantidade de venda inválida");
      return false;
    }

    if (quantidadeVendida > this.quantidade) {
      // não altera o estoque se não houver quantidade suficiente
      console.warn("Quantidade insuficiente para venda");
      return false;
    }

    this.quantidade -= quantidadeVendida;
    console.log(`Vendidos ${quantidadeVendida}x ${this.nome}`);
    return true;
  }

  // repor estoque, retorna novo estoque
  public repor(quantidadeReposta: number): number {
    if (!Number.isInteger(quantidadeReposta) || quantidadeReposta <= 0) {
      console.warn("Quantidade de reposição inválida");
      return this.quantidade;
    }
    this.quantidade += quantidadeReposta;
    return this.quantidade;
  }

  public mostrarEstoque(): string {
    return `Estoque atual do produto ${this.nome}: ${this.quantidade}`;
  }
}


// --- Testes simples ---
const produto1 = new Produto("item1", 20, 3);

console.log(produto1.vender(2));           // true
console.log(produto1.mostrarEstoque());    // Estoque atual do produto item1: 1
console.log(produto1.repor(5));            // 6
console.log(produto1.mostrarEstoque());    // Estoque atual do produto item1: 6
console.log(produto1.vender(7));           // false (insuficiente)
console.log(produto1.getEstoque());        // 6