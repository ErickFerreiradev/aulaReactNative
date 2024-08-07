import React, {useState} from 'react'
import { View, TextInput , Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {
    const [nome, Setnome] = useState('Teste')

    return (
       <View>
        <Text>{nome}</Text>
            <TextInput style={GlobalStyles.textG} 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => Setnome(nome)}
            />
       </View>
       )
}
