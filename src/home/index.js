import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, AsyncStorage} from 'react-native';
import api from '../services/api';

import styles from './styles';

function Home({navigation}) {
  const [ordemServico, setOrdemServico] = useState([]);

  useEffect(() => {
    async function loadOs() {
      const response = await api.get('/os');
      setOrdemServico(response.data);
    }
    loadOs();
  }, []);

  async function loadOd() {
    console.log('array api', ordemServico);
    try {
      await AsyncStorage.setItem('@dadosAPI', JSON.stringify(ordemServico));
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Mapa', {titulo: ordemServico.titulo});
  }

  async function testSendCooordinates() {
    
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Aceitar OS ?</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttonSim} onPress={loadOd}>
          <Text>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNao} onPress={()=>{}}>
          <Text>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
