let imagens = document.getElementById("imagens")
let alternativa1 = document.getElementById("alternativa1")
let alternativa2 = document.getElementById("alternativa2")
let alternativa3 = document.getElementById("alternativa3")
let perguntass = document.getElementById("perguntas")
let pontos = document.getElementById("pontos")
let erros = document.getElementById("erros")
let acertos = document.getElementById("acertos")
let mensagem = document.getElementById("mensagem")
let i = 0
let a = 0
let totalDepontuacoes = 0
let totalDeerros = 0
let totalDeacertos = 0
let alternativaCilcada

function filtrarEstatisticas() {

    if (alternativaCilcada.innerText == respostaCerta[i]) {
        imagens.src = array_imagens[i]
        totalDeacertos = totalDeacertos + 1
        totalDepontuacoes = totalDepontuacoes + 10
        perguntass.innerText = todasAsPerguntas[i]
        i = i + 1
        acertos.innerHTML = "Acertos: <b>" + totalDeacertos + "</b>"
        pontos.innerHTML = "Pontos: <b>" + totalDepontuacoes + "</b>"
        imagens.src = array_imagens[i]
        perguntass.innerText = todasAsPerguntas[i]
        a = a + 1
    } else {
        totalDeerros = totalDeerros + 1
        erros.innerHTML = "Erros: <b>" + totalDeerros + "</b>"
        imagens.src = array_imagens[i]
        perguntass.innerText = todasAsPerguntas[i]
        i = i + 1
        imagens.src = array_imagens[i]
        perguntass.innerText = todasAsPerguntas[i]
        a = a + 1
    }

    if (i == array_imagens.length) {
        i = array_imagens.length - 1
        imagens.src = array_imagens[i]
        perguntass.innerText = todasAsPerguntas[i]
        let resultado = "<h1><b>JOGO FINALIZADO!</b></h1>"
        mensagem.innerHTML = resultado
        pontos.innerHTML = "Pontos: <b>" + totalDepontuacoes + "</b>"
        erros.innerHTML = "Erros: <b>" + totalDeerros + "</b>"
        acertos.innerHTML = "Acertos: <b>" + totalDeacertos + "</b>"
        setTimeout(10)
    }

    alternativa1.innerText = opcao0[i]
    alternativa1.style.backgroundColor = "darkturquoise"
    alternativa2.innerText = opcao1[i]
    alternativa2.style.backgroundColor = "dodgerblue"
    alternativa3.innerText = opcao2[i]
    alternativa3.style.backgroundColor = "yellow"

    if (a > array_imagens.length) {
        i = 0
        a = 0
        imagens.src = array_imagens[i]
        totalDepontuacoes = 0
        totalDeerros = 0
        totalDeacertos = 0
        perguntass.innerText = todasAsPerguntas[i]
        mensagem.innerHTML = ""
        pontos.innerHTML = "Pontos: <b>" + totalDepontuacoes + "</b>"
        erros.innerHTML = "Erros: <b>" + totalDeerros + "</b>"
        acertos.innerHTML = "Acertos: <b>" + totalDeacertos + "</b>"
        alternativa1.innerText = "Coelho"
        alternativa1.style.backgroundColor = "yellow"
        alternativa2.innerText = "Cachorro"
        alternativa2.style.backgroundColor = "darkturquoise"
        alternativa3.innerText = "Gato"
        alternativa3.style.backgroundColor = "dodgerblue"
    }
}

let array_imagens = [
    "https://conteudo.imguol.com.br/c/entretenimento/36/2022/05/22/gata-tricolor-gato-gatos-1653265224214_v2_900x506.jpg",
    "https://todabandeira.com.br/wp-content/uploads/2023/04/bandeiras-america-do-sul01.jpg",
    "https://www.webmotors.com.br/wp-content/uploads/2022/01/04173246/1.-Honda-CG-160.jpg",
    "https://m.media-amazon.com/images/I/613bG7AWs8L.jpg",
    "https://s2-gshow.glbimg.com/Q7WqLVGP9-OEqglkOXsY2UzxaY8=/0x0:560x825/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/g/F/5jSmpBSKSsUq8fUBs9hQ/michael-jackson-6-.png",
    "https://cdn.shoppub.io/brogan/media/filer_public/c2/50/c2509ece-a66c-4505-8256-db080c86d8f8/02.jpg",
    "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg",
    "https://img.freepik.com/fotos-premium/jaca-isolada-na-superficie-branca_55883-11238.jpg",
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/diglbuex/file.png",
    "https://s5.static.brasilescola.uol.com.br/be/2021/02/saturno.jpg"
]

let todasAsPerguntas = [
    "Qual o nome do animal acima?",
    "Esta bandeira é de qual país?",
    "Qual veículo é esse?",
    "Qual objeto doméstico é esse?",
    "Quem é esse cantor?",
    "Qual o nome desse ator?",
    "Qual a marca de celular?",
    "Qual fruta é essa?",
    "Qual o nome desse dispositivo?",
    "Qual o nome desse planeta?"
]

let opcao0 = [
    "Cachorro",
    "Brasil",
    "Barco",
    "Mesa",
    "The Weeknd",
    "Will Smith",
    "iPhone",
    "Uva",
    "Notebook",
    "Júpiter"
]

let opcao1 = [
    "Gato",
    "Argentina",
    "Carro",
    "Ventilador",
    "Michael Jackson",
    "Tom Cruise",
    "Android",
    "Manga",
    "iPad",
    "Saturno"
]

let opcao2 = [
    "Rato",
    "França",
    "Moto",
    "Cadeira",
    "Tupac Shakur",
    "Brad Pitt",
    "Linux,",
    "Jaca",
    "Computador",
    "Marte"
]

let respostaCerta = [
    "Gato",
    "Brasil",
    "Moto",
    "Ventilador",
    "Michael Jackson",
    "Brad Pitt",
    "iPhone",
    "Jaca",
    "Notebook",
    "Saturno"
]

imagens.src = array_imagens[i]
perguntass.innerText = todasAsPerguntas[i]

alternativa1.onclick = function () {
    alternativaCilcada = alternativa1
    filtrarEstatisticas(alternativaCilcada)
}

alternativa2.onclick = function () {
    alternativaCilcada = alternativa2
    filtrarEstatisticas(alternativaCilcada)
}

alternativa3.onclick = function () {
    alternativaCilcada = alternativa3
    filtrarEstatisticas(alternativaCilcada)
}