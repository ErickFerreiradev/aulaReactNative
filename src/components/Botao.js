import React from 'react'
import { Button, Text } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {

    function executar(){
        console.warn('Ex 1!')
    }

    return (
        <>
        <Button 
        title='Executar #1!'
        onPress ={executar}
        />
        <Button 
        title='Executar #2!'
        onPress ={function (){
            console.warn('Ex 2!')
        }}
        />
        <Button 
        title='Executar #3!'
        onPress ={ () => {
            console.warn('Ex 3!')
        }
        }
        />
        </>
    )

}