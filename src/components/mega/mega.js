import React, { Component } from 'react'
import { Text } from 'react-native'
import Estilo from '../GlobalStyles'

export default class mega extends Component {

    render(){
        return (
            <Text style={Estilo.textG}>
                Gerador de Mega-sena {this.props.qtdNumeros}
            </Text>
        )
    }

}