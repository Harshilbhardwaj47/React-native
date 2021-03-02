import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import Caritem from './components/caritems'

export default function App() {
  return (
    <View style={styles.container}>
      
    <Caritem 
    name={"Model S"} 
    tagline={"starting at 59,999"}
    image={require('./assets/images/ModelS.jpeg')}
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
