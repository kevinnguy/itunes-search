import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Loading from '../Loading/index.js';

export default function SearchBar({ style, onChangeText }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        autoFocus
        style={styles.textInput}
        onChangeText={onChangeText}
        numberOfLines={1}
        autoCorrect={false}
        placeholder={'Search artists, songs, albums'}
      />
      <Loading style={styles.loading} isLoading={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: '#888',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    flex: 1,
    fontSize: 24,
  },
  loading: {
    marginLeft: 10,
  },
});
