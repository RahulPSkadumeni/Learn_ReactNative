import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElevatedCards]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Whats new in javascript ???</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://c4.wallpaperflare.com/wallpaper/176/195/659/javascript-node-js-abstract-logo-wallpaper-preview.jpg',
          }}></Image>
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://javascript.info/');
            }}>
            <Text>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.linkedin.com/in/rahul-p-s/');
            }}>
            <Text>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  bodyContainer: {},
  card: {},
  ElevatedCards: {
    elevation: 3,
  },
  headerText: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  headingContainer: {},
  footerContainer: {},
  cardImage: {height: 200},
});
