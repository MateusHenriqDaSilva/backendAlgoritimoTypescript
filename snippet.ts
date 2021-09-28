function snippet(texto: string, comprimento: Number): string {
    if (texto.length < comprimento) {
        return texto
    }
    const pontos = '...'
    let resultado = texto.slice(0, comprimento - pontos.length)
    const ultimoEspaco = resultado.lastIndexOf(' ');
    resultado = `${resultado.slice(0, ultimoEspaco)}${pontos}`
    return resultado
}

const resultado1 = snippet(`TypeScript é uma linguagem de programação que
    é um superconjunto sintático estrito de JavaScript e adiciona
    digitação estática para o idioma.`, 40)
console.log(resultado1)
// const resultado2 = snippet('Lorem ipsum dolor sit amet')
