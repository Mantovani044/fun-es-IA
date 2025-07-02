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
                texto: "Atlantico",
                afirmacao: " Atlantico"
            },
            {
                texto: "Pacifico",
                afirmacao: "Pacifico"
            }
        ]
    },
    {
        enunciado: "Qual fenômeno é responsável por mudar a posicao da Terra e gerar as pelas estações do ano?",
        alternativas: [
            {
                texto: "Rotacao.",
                afirmacao: " Rotacao"
            },
            {
                texto: "Translacao.",
                afirmacao: "Translacao"
            }
        ]
    },
    {
        enunciado: " Quantos continentes existem na Terra?",
        alternativas: [
            {
                texto: "5.",
                afirmacao: "5"
            },
            {
                texto: "7.",
                afirmacao: " 7."
            }
        ]
    },
    {
        enunciado: "Em qual camada da Terra ocorre a maior parte dos terremotos?",
        alternativas: [
            {
                texto: " Nucleo"
                afirmacao: " "
            },
            {
                texto: "Crosta"
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: "Qual é o principal gás que compõe a atmosfera da Terra? ",
        alternativas: [
            {
                texto: "Oxigenio",
                afirmacao: ""
            },
            {
                texto: " Nitrogenio",
                afirmacao: " "
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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
