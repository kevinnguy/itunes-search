import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

import { fetchSongResults } from '../../utils/networking/api';

export default class SearchList extends Component {
  state = {
    data: null,
    searchQuery: '',
    isLoading: false,
  };

  onChangeText = searchQuery => {
    this.setState({ searchQuery });
  };

  onPressSearch = async () => {
    const { searchQuery } = this.state;
    if (!searchQuery || !searchQuery.length) {
      return;
    }

    this.setState({ isLoading: true });
    const results = await fetchSongResults(searchQuery);
    this.setState({ data: results, isLoading: false });
  };

  onPressRow = songData => {
    this.props.onPressSong(songData);
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={this.onChangeText}
          isLoading={isLoading}
          onPress={this.onPressSearch}
        />
        <SongList data={data} onPress={this.onPressRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
