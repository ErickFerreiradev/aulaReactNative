import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default (props) => {
    console.warn(props)
    return(
<Text style={GlobalStyles.textG}>O valor {props.max} é maior que o valor {props.min}</Text>
    )
}