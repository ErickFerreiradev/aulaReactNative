import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {
    return (
       <>
        <View style={style.Botoes}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </View>
       </>
       )
}
 const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

 })