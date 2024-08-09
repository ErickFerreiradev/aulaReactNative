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
        flexGrow: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
      },

})

