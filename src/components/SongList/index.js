import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Separator from '../Separator';
import SongRow from '../SongRow';

export default class SongList extends Component {
  keyExtractor = item => `${item.trackId}`;

  renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>{'No search results'}</Text>
    </View>
  );

  renderSeparator = () => <Separator />;

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.onPress(item)}>
      <SongRow data={item} />
    </TouchableOpacity>
  );

  render() {
    const { data } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={data}
        ListEmptyComponent={this.renderEmptyState}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
  },
  emptyState: {
    marginTop: 50,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 20,
    color: '#888',
  },
});
