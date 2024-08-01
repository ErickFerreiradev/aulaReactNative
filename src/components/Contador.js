import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import GlobalStyles from './components/GlobalStyles'

export default props => {

    const [numero, setNumero] = useState(props.inicial) // captura o número inicial com função que att na tela

    const inc = () => {
        setNumero(numero + 1)
    }
    const dec = () => setNumero(numero - 1)

    return (
        <>

            <Text style={GlobalStyles.textG}>{numero}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        
        </>

    )

}
