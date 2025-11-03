function soma(a: number, b:number){
   return a+b
}

const comprimentar = (nome: string): string =>{
    return `Olá TS ${nome}`
}

const funcao_void = (nome: string): void =>{
    console.log(`Olá ${nome}`)
}

console.log(soma(20, 30))
console.log(comprimentar("Anderson"))
funcao_void("VOID")
