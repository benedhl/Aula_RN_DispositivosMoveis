import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Nossos componentes
import Simples from './src/components/Simples';
import ParImpar from './src/components/ParImpar';
import Multi , {Megasena} from './src/components/Multi';

// JSX
export default function App() {
  return (
    <View>
      <Simples texto = 'Olá tudo bem?'/>
      <ParImpar numero='11' />
      <Multi texto ='Luiz' />
      <Megasena tamanho={8} />
    </View>
  );
}


