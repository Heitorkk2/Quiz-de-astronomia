var pp = [
    ["images/facil/p1.jpg","O que o sol irá virar quando morrer?", "Super Nova", "Constelação", "galaxia", "Buraco Negro", "O sol ao fim de sua vida vira uma super nova, seguido de anã branca por não ter massa o suficiente para virar um buraco negro."],
    ["images/facil/p2.jpg","Quem foi o primeiro homem a pisar na lua?", "Neil Armstrong", "Iuri Gagarin", "Erik Shapperd", "Marcos Silva", "No dia 22/07/1969 Neil Armstrong pousou na lua."],
    ["images/facil/p3.jpg","qual a idade da Terra?", "4,6Bilhões de anos", "100 milhões de anos", "2023 anos", "7,9 Bilhões de anos", "A Terra possuí 4,6 Bilhões de anos desde sua formação."],
    ["images/facil/p4.jpg","Em Star Wars, as naves viajam na velocidade da luz, qual essa velocidade?", "300.000km/s", "1234,8 Km/h", "199.999m/s", "28.000km/h", "A luz viaja em 300.000km/s, infelizmente para atingir essa velocidade um corpo não pode ter massa."],
    ["images/facil/p5.jpg","Quantas luas o planeta terra possui?", "1", "3", "2", "nenhuma", "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É a unica que está em órbita da Terra "],
    ["images/facil/p6.jpg","Quem foi a primeira pessoa a ir pro espaço?", "Iuri Gagarin", "Alan Shepard", "Neil Armstrong", "Marcos Pontes", "Iuri Alexeievitch Gagarin foi um cosmonauta soviético e o primeiro ser humano a viajar pelo espaço, em 12 de abril de 1961, a bordo da Vostok 1."],
    ["images/facil/p7.jpg","Quem é conhecido como o pai da física moderna?", "Isaac Newton", "Werner Heisenberg", "Nikola Tesla", "Erwin Schrödinger", "Isaac Newton é reconhecido como um dos grandes cientistas da história da humanidade, deixando contribuições expressivas em campos do conhecimento como a matemática, astronomia e física."],
    ["images/facil/p8.jpg","O que é uma estrela?", "Esfera de plasma quente em fusão nuclear.", "Grande rocha flutuante no espaço.", "Objeto sólido e frio no espaço", "Bola de fogo no céu", "Uma estrela é uma esfera de gás incandescente devido à fusão nuclear em seu núcleo."],
    ["images/facil/p9.jpg","Qual é o sistema estelar mais próximo do nosso sistema solar", "Alfa Centauri", "Sirius", "Polaris", "Antares", "Alpha Centauri é o sistema estelar mais próximo após o Sol. Esse sistema inclui três estrelas: Alpha Centauri A, Alpha Centauri B e Proxima Centauri."],
    ["images/facil/p10.jpg","Qual foi o primeiro país a pousar na lua?", "Russia (URSS)", "EUA", "Brasil", "Índia", "O primeiro país a pousar na Lua foi a Rússia (então União Soviética), em 1966, com a missão Luna 9."]
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
