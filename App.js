import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
     mi app johansitoweb
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>emulador iOS</Text>
       <Text style={styles.paragraph}>emulador android</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
