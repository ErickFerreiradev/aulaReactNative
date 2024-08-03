import React from 'react'
import { Text, Platform } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {
    if(Platform.OS === 'android'){
        return  <Text style={GlobalStyles.textG}>Android</Text>
    } else if(Platform.OS === 'ios'){
        return  <Text style={GlobalStyles.textG}>IOS</Text>
    } else {
         return  <Text style={GlobalStyles.textG}>?</Text>

    }
       
}
