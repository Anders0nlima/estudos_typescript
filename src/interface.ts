interface User{
    nome: string;
    age: number;
    maior: boolean;
    estado: "solteiro" | "casado";
}

let usuario: User;

usuario = {
    nome: "anderson",
    age: 20,
    maior: true,
    estado: "casado"
}

const print_user = (user: User): void => {
   console.log(usuario.nome)
   console.log(usuario.age)
   console.log(usuario.maior)
   console.log(usuario.estado)
}

print_user(usuario)