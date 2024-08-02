import React, { useState } from 'react'
import { Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {

    const [numero, setNum] = useState(0)

    const incre = () => setNum(numero + 1)
    const decre = () => setNum(numero - 1)

    return (
        <>
       <Text style={GlobalStyles.textG}>
        Contador
       </Text>
       <ContadorDisplay num={numero} />
       <ContadorBotoes inc={incre} dec={decre} />
       </>
       )
}
