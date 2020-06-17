import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

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

    try {
      const results = await fetchSongResults(searchQuery);
      this.setState({ data: results, isLoading: false });
    } catch (error) {
      Alert.alert('Error', error.message, [
        { text: 'Retry', onPress: () => this.onPressSearch() },
      ]);
    }
  };

  onPressRow = songData => {
    // this.props.onPressSong(songData);
    this.props.navigation.navigate('SONG_DETAIL', { data: songData });
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          onSubmit={this.onPressSearch}
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
