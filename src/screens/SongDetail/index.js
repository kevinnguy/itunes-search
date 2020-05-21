import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import SongRow from '../../components/SongRow';

export default function SongDetail({ data, onPressBack }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <Text style={styles.backButtonText}>{'Back to search'}</Text>
      </TouchableOpacity>
      <SongRow
        showDetails
        style={styles.songRow}
        artworkStyle={styles.artworkStyle}
        data={data}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    width: 120,
    margin: 10,
  },
  backButtonText: {
    color: 'white',
  },
  songRow: {
    flexDirection: 'column',
    // height: '100%',
  },
  artworkStyle: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
});
