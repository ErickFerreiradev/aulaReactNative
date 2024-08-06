import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from '../GlobalStyles'

export default props => {
    return (
        <>
       <Text style={GlobalStyles.textG}>
        {props.nome} {props.sobrenome}
       </Text>
       </>
       )
}
