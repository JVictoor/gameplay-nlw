import React, {ReactNode} from "react";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from './styles';
import { theme } from "../../global/styles/themes";

//criando um componente filho para envolver todo o gradiente aplicando no app.tsx
type Props = {
    children: ReactNode;
}

export function Backgound({children}: Props){
    
    const {secondary80, secondary100} = theme.colors;

    return(
        <LinearGradient 
        style={styles.container}
        colors={[secondary80, secondary100]}
        >
            
            {children} 

        </LinearGradient>
    )
}