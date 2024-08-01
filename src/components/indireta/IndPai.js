import React, { useState } from 'react'
import Filho from './IndFiho'
import { Text } from 'react-native'
import GlobalStyles from '../GlobalStyles'

export default props => {

    const [num,setNum] = useState()
    const [texto,setTexto] = useState('')

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>

        <Text style={GlobalStyles.textG}>
            {texto}{num}
            </Text>
        <Filho
            min= {1}
            max= {60}
            funcao={exibirValor}
        />
        </>
    )
}