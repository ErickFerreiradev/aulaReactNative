import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
       <View style={style.FlexV3}>
            <Quadrado lado = {20}/>
            <Quadrado cor= '#F00' lado={30} />
            <Quadrado cor= '#F09' lado={40}/>
            <Quadrado cor= '#F90' lado={50}/>
       </View>
       )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 350,
        width: 400,
        backgroundColor: '#000',
    }
})