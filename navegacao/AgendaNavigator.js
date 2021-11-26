import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import ListaDeContatosTela from '../telas/ListaDeContatosTela'
import NovoContatoTela from '../telas/NovoContatoTela'
import BotaoCabecalho from '../componente/BotaoCabecalho'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="ListaDeContatos"
            screenOptions={{
                headerTintColor: 'white', 
                headerStyle: {backgroundColor: 'green'},
            }}
        >
            <Stack.Screen 
                name="NovoContato" 
                component={NovoContatoTela} 
                options={{title: 'Adicionar Contato'}}
            />
            <Stack.Screen 
                name="ListaDeContatos" 
                component={ListaDeContatosTela} 
                options={(props) => ({
                    title: 'Lista de Contatos',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                            <Item
                                title="Adicionar"
                                iconName="md-add"
                                onPress={() => props.navigation.navigate('NovoContato')}
                            />
                        </HeaderButtons>
                    )
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default container
