import React from 'react';
import { Text } from 'react-native';
import Padrao from '../styles/Padrao';

export default props => {
    //props.texto =  "lucas"
    let invertido = props.texto.split('').reverse().join('');
    return <Text style={[Padrao.invertido,{ fontSize: 30}]}>{invertido}</Text>
}

export const Megasena = props => {
    //prop.numeros
    const [min, max] = [1, 60];
    const numeros = Array (props.tamanho || 6).fill(0);

    for (let i = 0; i < numeros.length; i++) {
        let novoNumero = 0;
        while (numeros.includes(novoNumero)) {
            novoNumero = Math.floor(Math.random() * (max - min + 1) + min );

        }
        numeros [i] = novoNumero;
    }
    //Ordene o nosso arrayt de forma crescente
    numeros.sort((a,b) => a-b);
    return <Text>{numeros.join(',')}</Text>

    
}