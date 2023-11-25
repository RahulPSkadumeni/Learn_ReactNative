import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.heading}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
  },
});
