import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          {/* <Text style={styles.heading}>App</Text> */}
          <FlatCards />

          <ElevatedCards />
        </ScrollView>
      </SafeAreaView>
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
