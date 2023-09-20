import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';


export default function App() {
  const [fontCarregada] = useFonts({
    "MontSerratRegular" : Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
    "MontSerratItalic": Montserrat_400Regular_Italic
})

if(!fontCarregada) {
  return null
}

  return (
    <SafeAreaView>
      <StatusBar  />
      <Carrinho/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});