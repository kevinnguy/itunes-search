import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Loading({ style }) {
  return (
    <Image
      style={[styles.container, style]}
      source={{
        uri:
          'https://www.pngitem.com/pimgs/m/235-2350144_load-map-bar-ios-5s-iphone-progress-clipart.png',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
  },
});
