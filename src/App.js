import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import GlobalStyles from './components/GlobalStyles'

import Mega from './components/mega/mega'
// import FlexboxV4 from './components/layouts/FlexboxV4'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import Usuariologado from './components/Usuariologado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membros'
// import X, { Comp2, Comp3 } from './components/Multi'
// import Teste from './components/primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import IndPai from './components/indireta/IndPai'
// import Contv2 from './components/ContadorV2'
// import Plataforma from './components/Diferenciar'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

export default function(){
  return (
  <SafeAreaView style={GlobalStyles.App}>
  <View>
      
      <Mega qtdNumeros={7}/>
      {/* <Titulo principal='Cadastro Produto' secundario = 'Tela de cadastro do Produto'/>
      <FlexboxV4 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
    <Usuariologado usuario={  {nome: 'Gui', email: 'gui@gui.com'}  }/>
    <Usuariologado usuario={  {nome: 'Gui'}  }/>
    <Usuariologado usuario={null}/>
    <Usuariologado usuario={{}}/>
      <Familia>
        <Membro nome ='Bia' sobrenome='Arruda'/>
        <Membro nome ='Carlos' sobrenome='Arruda'/>
      </Familia>
      <Familia>
        <Membro nome ='Ana' sobrenome='Souza'/>
        <Membro nome ='Caio' sobrenome='Souza'/>
      </Familia>
      <Plataforma />
    <Contv2/>
    <IndPai />
      <Pai />
      <Contador inicial={100}/>
      <Botao />
      <Aleatorio min={1} max={60} />
      <Teste />
      <X />
      <Comp2 />
      <Comp3 /> */}
  </View>
  </SafeAreaView>
  )


  const style = StyleSheet.create({

      App2: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }

  })

}

