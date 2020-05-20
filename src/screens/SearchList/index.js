import React, { Component } from 'react';
import { View } from 'react-native';

import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

export default class SearchList extends Component {
  render() {
    return (
      <View>
        <SearchBar />
        <SongList />
      </View>
    );
  }
}
