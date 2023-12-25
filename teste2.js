let saldoDoRankig
let wins = 25
let losers = 5
rankeando(wins, losers)

const mensagemUm = " O herói tem o saldo de "
const mensagemDois = " e está no nível de " 

    if (saldoDoRankig < 10){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "ferro")
    }
    else if (saldoDoRankig <= 20){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "bronze")
    } 
    else if (saldoDoRankig <= 50){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "prata")
    } 
    else if (saldoDoRankig <= 80){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "ouro")
    }
    else if (saldoDoRankig <= 90){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "diamante")
    } 
    else if (saldoDoRankig <= 100){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "lendário")
    } 
    else if (saldoDoRankig <= 101){
        console.log(mensagemUm + saldoDoRankig + " vitórias" + mensagemDois + "imortal")
    }

function rankeando (wins, losers) {
    saldoDoRankig = wins - losers
    return saldoDoRankig
}