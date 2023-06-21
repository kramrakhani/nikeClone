import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />      
      <Text>Nike Clone</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer:{
    padding: 1,
    width: "50%"
  },
});
