import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };


export default function App() {

  const [fonteCarregada] = useFonts({
      "MontserratRegular" : Montserrat_400Regular,
      "MontserratBold" : Montserrat_700Bold,
      "MontserratItalic" : Montserrat_400Regular_Italic
  })

  if(!fonteCarregada){
    return null;
  }
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    </ImageBackground>
  </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});