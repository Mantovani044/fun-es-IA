const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior oceano da Terra?",
        alternativas: [
            {
                texto: " Atlântico",
                afirmacao: " Alternativas escolhidas:   Atlântico, "
            },
            {
                texto: "Pacífico",
                afirmacao: "Alternativas escolhidas:  Pacífico, "
            }
        ]
    },
    {
        enunciado: "Qual fenômeno é responsável por mudar a posição da Terra e gerar as pelas estações do ano?",
        alternativas: [
            {
                texto: "Rotação",
                afirmacao: " rotação, "
            },
            {
                texto: "Translação",
                afirmacao: " translação, "
            }
        ]
    },
    {
        enunciado: " Quantos continentes existem na Terra?",
        alternativas: [
            {
                texto: "7",
                afirmacao: " 7,"
            },
            {
                texto: "5",
                afirmacao: "  5,"
            }
        ]
    },
    {
        enunciado: "Em qual camada da Terra ocorre a maior parte dos terremotos?",
        alternativas: [
            {
                texto: "Núcleo",
                afirmacao: "núcleo, "
            },
            {
                texto: "Crosta",
                afirmacao: "crosta, "
            }
        ]
    },
    {
        enunciado: "Qual é o principal gás que compõe a atmosfera da Terra? ",
        alternativas: [
            {
                texto: "Oxigênio ",
                afirmacao: "oxigênio. "
            },
            {
                texto: " Nitrogênio",
                afirmacao: "nitrogênio. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "  ";
    atual++;
    mostraPergunta();

}
function mostraResultado() {
    caixaPerguntas.textContent = "Alternativas selecionadas: ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " Pacífico, translação, 7, crosta, nitrogênio. ";

}

function mostraResultado() {
    caixaPerguntas.textContent = "Alternativas corretas: ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " Pacífico, translação, 7, crosta, nitrogênio. ";

}

mostraPergunta();
