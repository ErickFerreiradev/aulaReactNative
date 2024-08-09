import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
       <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor= '#F00'/>
            <Quadrado cor= '#F09'/>
            <Quadrado cor= '#F90'/>
       </View>
       )
}

const style = StyleSheet.create({
    FlexV2:{
        flex: 1,
        width: 400,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#000',
    }
})