import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SongRow from '../SongRow';

export default class SongList extends Component {
  keyExtractor = item => item.trackId;

  renderItem = ({ item }) => <SongRow data={item} />;

  render() {
    const { data } = this.props;
    return (
      <FlatList
        style={{}}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
