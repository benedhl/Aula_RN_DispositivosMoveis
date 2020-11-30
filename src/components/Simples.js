import React from 'react';
import { Text, View } from 'react-native';
import Simples from '../styles/Padrao';

export default (props) => {
return <Text style={Simples.exercicio}>Texto: {props.texto}</Text>


}