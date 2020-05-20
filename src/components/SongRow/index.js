import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SongRow({ data }) {
  const { artistName, artworkUrl100, trackName, collectionName } = data;
  return (
    <View style={styles.container}>
      <Image style={styles.artwork} source={{ uri: artworkUrl100 }} />
      <View style={styles.details}>
        <Text style={styles.track} numberOfLines={1}>
          {trackName}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artistName}
        </Text>
        <Text style={styles.collection} numberOfLines={2}>
          {collectionName}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    padding: 10,
  },
  artwork: {
    width: 100,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  artist: {
    fontSize: 20,
  },
  track: {
    fontSize: 20,
  },
  collection: {
    fontSize: 18,
  },
});
