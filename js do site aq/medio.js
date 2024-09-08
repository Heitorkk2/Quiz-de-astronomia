var pp = [
    ["images/medio/p1.jpg","O que é um buraco negro?", "Matéria extremamente comprimida", "Espaço vazio", "Local sem luz no unverso", "Um buraco no espaço", "Um buraco negro é uma estrela com pelo menos 20x a massa do sol, que quando morre, sua matéria é comprimida em um espaço minusculo, onde nem a luz consegue escapar."],
    ["images/medio/p2.jpg","Qual a principal fonte de energia do sol?", "Hidrogênio", "Hélio", "Luz", "Fogo", "O sol funde em seu núcleo átomos de hidrogênio em hélio, liberando calor no processo de fusão."],
    ["images/medio/p3.jpg","Qual a idade estimada do universo?", "13,8 bilhões de anos", "100 bilhões de anos", "2023 anos", "7,9 Bilhões de anos", "Segundo a teoria do Big Bang, o universo surgiu a 13,8 bilhões de anos atrás."],
    ["images/medio/p4.jpg","Qual o nome do telescópio espacial lançado pela NASA em 1990?", "Hubble", "James Webb", "Telescópio Einstein", "Telescópio de Magalhões", "O telescópio espacial Hubble foi lançado em 1990 pela NASA para ajudar nas pesquisas sobre o espaço."],
    ["images/medio/p5.jpg","Quantas luas Júpiter tem?", "92", "72", "50", "87", "Júpiter em incríveis 92 luas. Entre elas, mais de 50 já têm nomes oficiais, enquanto o restante ainda aguarda nomenclaturas próprias."],
    ["images/medio/p6.jpg","Podemos dizer que o universo observável tem um tamanho pois:", "O espaço se expande mais rápido que a luz", "Esse é o tamanho total do universo", "Não conseguimos ver mais longe por limitações tecnológicas", "Não sabemos o motivo", "O universo observável tem um tamanho pois a partir de certa distância, a expansão do universo se torna mais rápida que a luz, assim não há como saber nem ver o que tem fora dessa área."],
    ["images/medio/p7.jpg","Com qual galáxia a Via Láctea vai colidir?", "Andrômeda", "Canis Major", "Galáxia do triângulo", "Nenhuma", "Daqui 4-5 Bilhões de anos, Andrômeda vai colidir com nossa galáxia, formando a Milkdromeda."],
    ["images/medio/p8.jpg","O que é uma nebulosa?", "Nuvem de gás e poeira", "Personagem dos Guardiões da Galáxia", "Local extremamente escuro no espaço", "Um planeta escuro", "Uma nebulosa é uma nuvem de gás e poiera no espaço."],
    ["images/medio/p9.jpg","Qual é o primeiro astro que os humanos observaram?", "Nenhum dos anteriores", "Lua", "Marte", "Vênus", "O primeiro astro que os humanos observaram foi a terra."],
    ["images/medio/p10.jpg","Qual o maior foguete já construído?", "Starship", "Saturno V", "Infinity One", "Luna", "O maior foguete já construído foi o Starship, feito pela SpaceX."],
    
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
