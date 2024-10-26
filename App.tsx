import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Testando meu app no ubuntu!</Text>
      <Text style={styles.textWhite}>Agora sim, consegui configurar o Android kk</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white'
  }
});
