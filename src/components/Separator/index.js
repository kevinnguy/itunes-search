import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Separator({ style }) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#888',
  },
});
