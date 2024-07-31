import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {
    const { min, max } = props
    const delta = props.max - props.min + 1 // const delta = max - min + 1 > da pra fazer por conta da const acima
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text style={GlobalStyles.textG}>O valor aleatório é {aleatorio}</Text>
    )
}