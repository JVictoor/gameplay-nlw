//tsx porque vai ter componentes alem de js
//estrutura da interface 

import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StatusBar,

} from 'react-native';


import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png';
import { styles} from './styles'

export function SignIn(){
  return(
    <View style={styles.container}>
      
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />


      <Image 
       source={IllustrationImg} 
       style={styles.image} 
       resizeMode="stretch"//ajusta a centralizar a imagem
      />
    
      <View  style={styles.content} >

        <Text  style={styles.title} >
          Organize {`\n`}
          suas jogatinas{`\n`}
          facilmente 
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          facilmente
        </Text>

        <ButtonIcon 
          title="Entrar com o Discord"
          activeOpacity={0.7}
        />

      </View>
    </View>
  );
}