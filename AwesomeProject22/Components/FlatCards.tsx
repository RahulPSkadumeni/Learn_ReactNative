import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF5722',
  },
  cardTwo: {
    backgroundColor: '#60DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },

  text: {
    color: '#f6f6f6',

    fontWeight: 'normal',
  },
});
