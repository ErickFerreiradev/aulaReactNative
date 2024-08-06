import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from '../GlobalStyles'

import produtos from './Produtos'

export default props => {
    return (
        <>
            <Text style={GlobalStyles.textG}>
                Lista de Produtos
            </Text>
            {produtos.map(p => {
                return <Text key={p.id}>{p.id} - {p.nome} tem preço de R$ {p.preco}</Text>
            })}
       </>

       )
}
