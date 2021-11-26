const estadoInicial = {
    listaContatos: []
}

export default (estado = estadoInicial, action) => {

    switch (action.type) {
        case "ADD_CONTATO":
            const novoContato = {
                id: new Date().toString(),
                nome: action.dadosContato.nome,
                telefone: action.dadosContato.telefone
            }
            return {
                listaContatos: [novoContato, ...estado.listaContatos]
            }
        default:
            return estado
    }
}
