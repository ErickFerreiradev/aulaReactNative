import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'grey',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },

    textG: {
        fontSize: 32
    }
})

