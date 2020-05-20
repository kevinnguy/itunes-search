import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Separator from '../Separator';
import SongRow from '../SongRow';

export default class SongList extends Component {
  keyExtractor = item => item.trackId;

  renderSeparator = () => <Separator />;

  renderItem = ({ item }) => <SongRow data={item} />;

  render() {
    const { data } = this.props;
    return (
      <FlatList
        style={{}}
        data={data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
