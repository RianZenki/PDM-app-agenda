export const addContato = (nome, telefone) => {
    return {
        type: "ADD_CONTATO",
        dadosContato: {
            nome,
            telefone
        }
    }
}