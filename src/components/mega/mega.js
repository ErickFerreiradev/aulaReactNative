import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../GlobalStyles'

import MegaNumero from './numero'

export default class mega extends Component {

        constructor(props) {
        super(props)

        this.state = {
           
            qtdNumeros: props.qtdNumeros,
            numeros: []
            
        }
    }

    alterarQtdNumero = (qtd) => {
        this.setState({
            qtdNumeros: +qtd
        })
    }

    gerarNumeroNaoContido = nums => {
        
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        
        const numeros = Array(this.state.qtdNumeros).fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [] )
        .sort((a, b) => a - b)
        this.setState({
            numeros
        })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num = {num}/>
        })
    }

    render(){
        return (
            <>
            <Text style={Estilo.textG}>
                Gerador de Mega-sena {this.state.qtdNumeros}
            </Text>
            <TextInput 
                keyboardType='numeric'
                style={{borderBottomWidth: 1}}
                placeholder='Quantidade números'
                value= {`${this.state.qtdNumeros}`}
                onChangeText={this.alterarQtdNumero}
            />
            <Button 
                title='Gerar'
                onPress={this.gerarNumeros}
            />
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
            
            {this.exibirNumeros()}

            </View>
            </>
        )
    }

}
