import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from './GlobalStyles'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
       <If teste= {usuario && usuario.nome && usuario.email}>
           <Text style={GlobalStyles.textG}>
                Usuário logado:
           </Text>
           <Text style={GlobalStyles.textG}>
                {usuario.nome} - {usuario.email}
           </Text>
       </If>
       </>
       )
}
