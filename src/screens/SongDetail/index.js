import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SongRow from '../../components/SongRow';

export default function SongDetail({ data, onPressBack }) {
  return (
    <View style={styles.container}>
      <SongRow data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
  },
});
