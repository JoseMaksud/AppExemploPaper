import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button icon="camera" mode='contained' onPress={() => console.log("Pressed")}>
        Press me
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
