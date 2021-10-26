//tsx porque vai ter componentes alem de js
//estrutura da interface 

import React from 'react';
import { 
  View, 
  Text, 
  Image, 
} from 'react-native';


import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png';
import { styles} from './styles'
import { useNavigation } from '@react-navigation/native';




export function SignIn(){
const navigation = useNavigation();

  //acionando o botão para levar para home
  function handleSignIn(){
    navigation.navigate('Home');
  
  }


  return(
    <View style={styles.container}>
      
      <Image 
       source={IllustrationImg} 
       style={styles.image} 
       resizeMode="stretch"//ajusta a centralizar a imagem
      />
    
      <View  style={styles.content} >

        <Text  style={styles.title} >
          Conecte-se {`\n`}
          e organize suas{`\n`}
          jogatinas 
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          facilmente
        </Text>

        <ButtonIcon 
          title="Entrar com o Discord"
          onPress={handleSignIn}
        />

      </View>
    </View>
  );
}