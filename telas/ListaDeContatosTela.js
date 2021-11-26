import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const ListaDeContatosTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.listaContatos)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Contatos</Text>
                <FlatList
                    data={contatos}
                    keyExtractor={contato => contato.id}
                    renderItem={
                        contato => (
                            <View style={styles.itemLista}>
                                <Text style={styles.dados}>Nome: {contato.item.nome}</Text>
                                <Text style={styles.dados}>Telefone: {contato.item.telefone}</Text>
                            </View>
                        )
                    }
                />
        </View>
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20
    },
    itemLista: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    dados: {
        fontSize: 18,
    },
})
