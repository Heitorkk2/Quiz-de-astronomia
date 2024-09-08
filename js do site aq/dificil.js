var pp = [
    ["images/dificil/p1.jpg","Qual a maior estrela do universo?", "Stephenson 2-18", "VY Canis Major", "UY Scuti", "Betelgeuse", "A maior estrela do universo é a Stephenson 2-18, com 2.150 raios solares."],
    ["images/dificil/p2.jpg","Qual é o fim do universo em que a expansão do universo vence todas as forças fundamentais?", "Big Rip", "Big Crunch", "Big Freeze", "Big Slurp", "No Big Rip, a massa do universo não é suficiente para vencer a expansão do universo, então ele vai continuar a acelerar até todas as coisas se desfazerem"],
    ["images/dificil/p3.jpg","Como buracos negros evaporam?", "Radiação Hawking", "Ventos solares", "Expansão do universo", "Não evaporam", "A radiação Hawking é a causa da evaporação de buracos negros, por meio de efeitos quânticos."],
    ["images/dificil/p4.jpg","Quantas partículas existem no modelo padrão?", "17", "16", "18", "3", "Existem 17 partículas no modelo padrão, com 6 quarks, 6 léptons e 5 bósons."],
    ["images/dificil/p5.jpg","Qual a última partícula que foi provada que existe no modelo padrão?", "Bóson de Higgs", "Eletróns", "Bóson Z", "Neutrino sabor múson", "O Bóson de Higgs foi comprovado como existente pelo LHC, sua função é dar massa as partículas"],
    ["images/dificil/p6.jpg","Quantos sabores tem o neutrino?", "3", "1", "4", "0", "O neutrino tem os sabores: Elétron, Múon e Tau."],
    ["images/dificil/p7.jpg","Em qual superaglomerado estamos?", "Laniakea", "Via Láctea", "Virgem", "Local", "Em 2014, com um novo método para se definir um superaglomerado, Laniakea foi definido como o nosso superaglomerado."],
    ["images/dificil/p8.jpg","Como se chama o processo para se formar hélio em uma estrela?", "Cadeia próton-próton", "Cadeia nêutron-nêutron", "Fissão Núclear", "Compressão Hidroestelar", "A cadeia próton-próton(PP) é o processo de fusão nuclear no qual os prótons se combinam para formar hélio e liberar energia no núcleo de estrelas."]   
]
let epergunta = []

for(let i = 0; i < pp.length; i++) {
    epergunta[i] = i
}

let pergunta = []
let npergunta = 0
const qntdperguntas = 5 //coloque o valor exato de perguntas que o quiz deve ter!
let opc = [1,2,3,4]
let acertos = 0

let borda = document.getElementById("alt1").style.border
{ //escolhendo pergunta
    for(let i = 0; i < epergunta.length; i++) {
        t = parseInt(Math.random() * epergunta.length)
        aux = epergunta[i]
        epergunta[i] = epergunta[t]
        epergunta[t] = aux
    }

}
function criarPergunta() {
    pergunta = pp[epergunta[npergunta]]
    document.getElementById("titulop").innerHTML = pergunta[1]

for(let i = 0; i <=3; i++) {
   let n = parseInt(Math.random() * 4)
   let temp = opc[i]
   opc[i] = opc[n]
   opc[n] = temp
}

document.getElementById("oxd").src = pergunta[0]
document.getElementById("alt1").innerHTML = pergunta[opc[0]+1]
document.getElementById("alt2").innerHTML = pergunta[opc[1]+1]
document.getElementById("alt3").innerHTML = pergunta[opc[2]+1]
document.getElementById("alt4").innerHTML = pergunta[opc[3]+1]
}

let respondeu = false

function resposta(escolha) {
    if (respondeu == false) {
        for(let i = 1; i <= 4; i ++) {
            let aux = "alt" + i
            document.getElementById(aux).style.border = "0";
            if(document.getElementById(aux).innerHTML == pergunta[2]) {
                document.getElementById(aux).style.backgroundColor = "green"
            } else {
                document.getElementById(aux).style.backgroundColor = "red"
            }
            document.getElementById("opacidade").style.display = "flex"
        }
        if(escolha == 1) {
            document.getElementById("acertou?").innerHTML = "Acertou!!!"
            acertos++
        } else {
            document.getElementById("acertou?").innerHTML = "Errou"
        }
        respondeu = true
        document.getElementById("resp").style.display = "flex"
        document.getElementById("explicacao").innerHTML = pergunta[6]
        
    }
    

}

function proxPerg() {
    
    if(npergunta < qntdperguntas - 1) {
        npergunta++
        document.getElementById("alt1").style.backgroundColor = ""
        document.getElementById("alt2").style.backgroundColor = ""
        document.getElementById("alt3").style.backgroundColor = ""
        document.getElementById("alt4").style.backgroundColor = ""
        document.getElementById("alt1").style.border = borda;
        document.getElementById("alt2").style.border = borda;
        document.getElementById("alt3").style.border = borda;
        document.getElementById("alt4").style.border = borda;
        document.getElementById("opacidade").style.display = "none"

        respondeu = false
    
        criarPergunta()
    } else {
        document.getElementById("divperg").style.display = "none"
        document.getElementById("resp").style.display = "none"
        document.getElementById("fimquiz").style.display = "flex"
        document.getElementById("acertos").innerHTML = "Você Acertou " + acertos

    }

}
criarPergunta()

document.getElementsByTagNameNS
