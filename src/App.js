import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import GlobalStyles from './components/GlobalStyles'

// import X, { Comp2, Comp3 } from './components/Multi'
// import Teste from './components/primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/aleatorio'
import Titulo from './components/Titulo'


export default function(){
  return (
  <SafeAreaView style={GlobalStyles.androidSafeArea}>
  <View>
      <Titulo principal='Cadastro Produto' secundario = 'Tela de cadastro do Produto'/>
      
      {/* <Aleatorio min={1} max={60} />
      <Teste />
      <X />
      <Comp2 />
      <Comp3 /> */}
  </View>
  </SafeAreaView>
  )


  const style = StyleSheet.create({
    App: {
        padding: 20,
        alignItems: 'center',
    }
  })

}

