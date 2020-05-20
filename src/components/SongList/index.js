import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import Separator from '../Separator';
import SongRow from '../SongRow';

export default class SongList extends Component {
  keyExtractor = item => `${item.trackId}`;

  onPress = item => this.props.onPress(item);

  renderSeparator = () => <Separator />;

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.onPress}>
      <SongRow data={item} />
    </TouchableOpacity>
  );

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
