import React from 'react'
import { Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default function(){
    return <Text style={GlobalStyles.textG}>Comp OFICIAL</Text>
}

export function Comp2(){
    return <Text style={GlobalStyles.textG}>Comp 02</Text>
}

function Comp3(){
    return <Text style={GlobalStyles.textG}>Comp 03</Text>
}

export { Comp3 }