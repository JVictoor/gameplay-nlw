
//ponto de entrada de tudo

import React from 'react';
//carrega as fontes no dispositivo
import{useFonts} from 'expo-font';
//importando o auxiliar do carregamento da splash
import AppLoading from 'expo-app-loading';
//fontes que eu quero que carregue para o ususario
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import {StatusBar} from 'react-native';


import  { Routes }  from './src/routes';
import { Backgound } from './src/components/Background';

export default function App(){

  //importanto as fontes antes do return para reinderizar e segurando a splash para carregar tudo para o usuario com vetor
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  
  //criando o if para falar para o app enquanto as fontes não forem carregadas precisa deixar a splash em foco precisa instalar a biblioteca : expo install expo-app-loading
  if(!fontsLoaded){
    return <AppLoading /> //AppLoading segura a tela de splash
  }

  return(
    //<> -> significa o Fragment é como se fosse uma caixona para fazer uma unica chamada dos componentes
    <Backgound>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
       <Routes />
    </Backgound>
  );
}
//melhor lugar para fazer o carregamento das fontes