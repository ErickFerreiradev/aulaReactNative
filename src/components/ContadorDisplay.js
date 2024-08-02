import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import GlobalStyles from './GlobalStyles'


export default props => {
    return (
       <View style={style.Display}>
           <Text style={[GlobalStyles.textG, style.DisplayText]}>
                {props.num}
           </Text>
       </View>
       )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
    },
    DisplayText: {
        color: '#FFF'
    }
})