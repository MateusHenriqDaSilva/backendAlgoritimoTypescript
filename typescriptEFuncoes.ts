function adicionar(x, y) {
    return x + y;
}

adicionar(1, 2)
// adicionar(1, 2, 3) parametros errados
// adicionar(1) parametros errados
// adicionar() parametros errados
// alt + f8 -> mostra os problemas

function add(x: number, y: number) {
    return x + y
}

const primeiro = { propriedade: 'valor' }
const segundo = false
// const resultado = add(primeiro, segundo) funcao nao recebe objeto

function add2(x: number, y: number): number {
    return x + y
}
const valorResultado: number = add2(2, 2);