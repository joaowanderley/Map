/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';

import styles from './styles';
const Details = () => {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@dadosAPI', (_err, result) => {
      setDados(JSON.parse(result));
    })
    console.log(dados);
  }, [])
  
  return (
    <View>
      { dados.map(os => ( 
         <View key={os._id}>
            <Text>{os.titulo}</Text>
            <Text>Descrição OS: {os.descricao}</Text>
            <Text>Latitude origem: {os.locationOrigin.coordinates[1]}</Text>
            <Text>Longitude origem: {os.locationOrigin.coordinates[0]}</Text>
            <Text></Text>
            <Text>Latitude destino: {os.locationDestination.coordinates[1]}</Text>
            <Text>Longitude destino: {os.locationDestination.coordinates[0]}</Text>
          </View>
         ))} 
    </View>
  );
};

export default Details