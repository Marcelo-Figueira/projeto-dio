let dados = {
    nome: "",
    idade: "",
    tipoEAtaque: {
        1:["Guerreiro", "a espada"],
        2:["mago", "magia"],
        3:["monge", "artes marciais"],
        4:["ninja", "shuriken"]
    }
}
let EscolherNome = ""
// ensira o número corresponsdente a sua classe de herói: 1 = guerreiro; 2 = mago; 3 = monge; 4 = ninja 
let type = 4
let Idade = ""

class hero {
    constructor(tipoEAtaque) {
        this.tipoEAtaque = tipoEAtaque
            let [tipo, ataque] = dados.tipoEAtaque[type]
            console.log(`O ${tipo} atacou usando ${ataque}`)
        }
        
    }

let atacar = new hero(dados.tipoEAtaque)
