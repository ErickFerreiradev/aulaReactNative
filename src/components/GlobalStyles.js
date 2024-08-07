import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'grey',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        
    },

    textG: {
        fontSize: 32,
        padding: 20,
    },

    App: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }


})

