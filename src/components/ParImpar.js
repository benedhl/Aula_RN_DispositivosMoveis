import React from 'react';
import Padrao from '../styles/Padrao';
import { View, Text} from 'react-native';


import Condicao from './Condicao';

function parOuImpar (numero) {
    let resultado = (numero % 2 == 0) ? 'Par' : 'Ímpar';
    return <Text>{resultado}</Text>
}



export default props => {
    // props.numero for par> "É PAR"
    // props.numero for impar: "É impar"

    return <View>
        {
            parOuImpar(props.numero)
        }

    </View> 
}
/*
export default props =>{
    return <View>
        <Condicao teste={props.numero % 2 == 0}>
            <Text>É Par</Text>
        </Condicao>
        <Condicao teste={props.numero % 2 != 0}>
            <Text>É impar</Text>
        </Condicao>
    </View>
}
*/