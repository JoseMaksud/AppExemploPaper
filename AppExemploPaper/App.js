import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Appbar, Avatar, Card, Checkbox } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcnusY7qZHApivDI5JUGvnp9_Q_N2tv5RQQ&s' }} />
    </Card>


      {/* 
      <ActivityIndicator animating={true} color={'crimson'} size={100} />
      
      <Avatar.Icon size={100} icon="folder" />

      <Button icon="camera" mode='contained' onPress={() => console.log("Pressed")}>
        Press me
      </Button> 
      */}
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
