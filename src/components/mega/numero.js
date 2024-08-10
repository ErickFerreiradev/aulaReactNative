import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import GlobalStyles from '../GlobalStyles'

export default ({num}) => {
    return (
    <View style={style.Container}>
       <Text style={style.Num}>
            {num}
       </Text>
    </View>   
       )
}

const style = StyleSheet.create({

    Container: {
        
        height: 50,
        width: 50,
        backgroundColor: '#FFF',
        margin: 5,
        borderRadius: 25,
    },

    Num: {
        color: '#000',
        marginTop: 13,
        textAlign: 'center',
        fontWeight: 'bold',
    },

})