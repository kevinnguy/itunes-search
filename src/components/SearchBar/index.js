import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Loading from '../Loading.js';

export default function SearchBar({ style }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.textInput} />
      <Loading style={styles.loading} isLoading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
  loading: {
    marginHorizontal: 10,
  },
});
