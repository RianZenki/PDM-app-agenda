import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addContato } from '../store/contatos-action'

const NovoContatoTela = (props) => {

    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')

    const dispatch = useDispatch()

    const nomeAlterado = (nome) => {
        setNome(nome)
    }

    const numeroAlterado = (numero) => {
        setNumero(numero)
    }

    const adicionarContato = () => {
        const acao = addContato(nome, numero)
        dispatch(acao)
        props.navigation.goBack()
    }

    return (
        <View style={styles.formulario}>
            <Text style={styles.titulo}>Novo Contato</Text>
            <TextInput 
                style={styles.entrada} 
                onChangeText={nomeAlterado}
                placeholder="Digite o nome"
                value={nome}
            />
            <TextInput
                style={styles.entrada}
                onChangeText={numeroAlterado}
                placeholder="Digite o numero de telefone"
                value={numero}
            />
            <Button
                title="Adicionar contato"
                color="green"
                onPress={() => adicionarContato()}
            />
        </View>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    formulario: {
        margin: 20,
    },
    titulo: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20
    },
    entrada: {
        padding: 6,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        marginBottom: 20,
        outline: 'none',
    }
})
