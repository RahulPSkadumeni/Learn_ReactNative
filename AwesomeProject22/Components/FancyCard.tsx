import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.ElevatedCards]}>
        <Image
          source={{
            uri: 'https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_545452072-960x600.jpg.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Houseboat backwaters</Text>
          <Text style={styles.cardLabel}>Alleppey, Kerala</Text>
          <Text numberOfLines={3} style={styles.cardDescription}>
            Don’t miss out on the experience of sailing in a houseboat in
            Alleppey that happens to be one of the best things to do in Kerala
            for couples.It happens to be one of the best things to do in Kerala
            for couples.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#218F76',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',

    color: '#EAF0F1',
  },
  cardDescription: {
    fontSize: 12,
    color: '#EAF0F1',
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    color: '#EAF0F1',
  },
  cardFooter: {
    fontSize: 12,
    color: '#000',
  },

  ElevatedCards: {
    // backgroundColor: '#808080',
    elevation: 3,
    // shadowOffset: {width: 1, height: 1},
    // shadowColor: '#333',
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
});
