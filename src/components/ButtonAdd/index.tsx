import React from 'react';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { styles } from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { theme } from '../../global/styles/themes';

//passandoa typagem de uma maneira direta
 export function ButtonAdd({...rest}: RectButtonProps) {
     return(
         <RectButton 
         style={styles.container} >
        
        <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
        />
         </RectButton>
     )
 }