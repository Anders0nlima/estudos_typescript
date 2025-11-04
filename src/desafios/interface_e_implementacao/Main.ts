interface Animal{
    falar(): void;
    comer(): void;
}


class Gato implements Animal{
    falar(): void {
        console.log("O gato diz: miau!")
    }

    comer(): void {
        console.log("O gato está comendo ração de paixe!")
    }
}

class Cachorro implements Animal{
    falar(): void {
        console.log("O cachorro diz: auau!")
    }

    comer(): void {
        console.log("O cachorro está comendo ração de carne!")
    }
}


function interagir(animal: Animal): void{
    console.log("interagindo com oo animal")
    animal.falar()
    animal.comer()

}


const gato = new Gato()
const cachorro = new Cachorro()

interagir(gato)
interagir(cachorro)