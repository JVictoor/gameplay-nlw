//regras de estilo
//ts - só tem js em regras visuais

import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/themes';

 

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',//alinha na vertical
        justifyContent: 'center', //alinha na horizontal
        backgroundColor: theme.colors.background,
        
    },

    image:{
        width:'100%',
        height:360,
    },

    content:{
        marginTop: -40,
        paddingHorizontal:50,
    },

    
    title:{
        color: theme.colors.heading,
        textAlign:'center',
        fontSize: 40,
        marginBottom: 16,
    },

    subtitle:{
        color:theme.colors.heading,
        fontSize:15,
        textAlign:'center',
        marginBottom:64,
    },

});