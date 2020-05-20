import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import SearchList from './screens/SearchList';
import SongDetail from './screens/SongDetail';

const NAVIGATION_SCREENS = {
  SEARCH_LIST: 'SEARCH_LIST',
  SONG_DETAIL: 'SONG_DETAIL',
};

export default class App extends Component {
  state = {
    currentScreen: NAVIGATION_SCREENS.SEARCH_LIST,
    app: {
      selectedTrack: null,
    },
  };

  navigateToSongDetail = selectedTrack => {
    this.setState({
      currentScreen: NAVIGATION_SCREENS.SONG_DETAIL,
      app: { selectedTrack },
    });
  };

  navigateToSearchList = () => {
    this.setState({
      currentScreen: NAVIGATION_SCREENS.SEARCH_LIST,
      app: { selectedTrack: null },
    });
  };

  render() {
    const {
      currentScreen,
      app: { selectedTrack },
    } = this.state;

    let screenComponent;
    switch (currentScreen) {
      case NAVIGATION_SCREENS.SEARCH_LIST:
        screenComponent = (
          <SearchList onPressSong={this.navigateToSongDetail} />
        );
        break;

      case NAVIGATION_SCREENS.SONG_DETAIL:
        screenComponent = (
          <SongDetail
            data={selectedTrack}
            onPressBack={this.navigateToSearchList}
          />
        );
        break;

      default:
        throw new Error(`Missing screen for ${currentScreen}`);
    }

    return (
      <SafeAreaView style={styles.container}>{screenComponent}</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
