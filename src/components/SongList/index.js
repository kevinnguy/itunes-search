import React from 'react';
import { Flatlist, StyleSheet, View } from 'react-native';

import SongRow from '../SongRow';

export default function SongList({ data }) {
  return (
    <Flatlist
      data={data}
      renderItem={({ item }) => <SongRow data={item} />}
      keyExtractor={item => item.id}
    />
  );
}
