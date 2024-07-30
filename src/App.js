import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import GlobalStyles from './components/GlobalStyles'

import X, { Comp2, Comp3 } from './components/Multi'
import Teste from './components/primeiro'

export default function(){
  return (
  <SafeAreaView style={GlobalStyles.androidSafeArea}>
  <View>
      <Teste />
      <X />
      <Comp2 />
      <Comp3 />
  </View>
  </SafeAreaView>
  )


  const styles = StyleSheet.create({
    App: {
      
    }
  })

}

