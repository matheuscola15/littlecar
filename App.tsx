import { SafeAreaView, StatusBar, View } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';

export default function App() {
  return (
    <View>
      <SafeAreaView/>
      <StatusBar/>
      <Carrinho/>
    </View>
  );
}