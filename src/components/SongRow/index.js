import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SongRow({ data, style, artworkStyle, showDetails }) {
  const {
    artistName,
    artworkUrl100,
    trackName,
    collectionName,
    trackPrice,
    collectionPrice,
    trackExplicitness,
    primaryGenreName,
  } = data;
  const isExplicit = trackExplicitness === 'explicit';

  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.artwork, artworkStyle]}
        source={{ uri: artworkUrl100 }}
      />
      <View style={[styles.details, !showDetails && { flex: 1 }]}>
        <Text style={styles.description} numberOfLines={1}>
          {showDetails ? `Track: ${trackName}` : trackName}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {showDetails ? `Artist: ${artistName}` : artistName}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {showDetails ? `Album: ${collectionName}` : collectionName}
        </Text>
      </View>
      {showDetails && (
        <View style={styles.moreDetails}>
          <Text style={styles.description}>{`$${trackPrice}`}</Text>
          <Text
            style={
              styles.description
            }>{`Buy the album for $${collectionPrice}`}</Text>
          <Text style={styles.description}>
            {`Genre: ${primaryGenreName}`}
            {isExplicit && ' (Explicit)'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    padding: 10,
  },
  artwork: {
    width: 100,
    marginRight: 10,
  },
  details: {
    justifyContent: 'space-between',
  },
  moreDetails: {
    marginTop: 20,
  },
  description: {
    fontSize: 18,
  },
});
