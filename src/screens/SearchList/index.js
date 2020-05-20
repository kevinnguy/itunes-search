import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

const data = {
  resultCount: 10,
  results: [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857786,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Better Together',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Better Together',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/better-together/1440857781?i=1440857786&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/better-together/1440857781?i=1440857786&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/94/25/9c/94259c23-84ee-129d-709c-577186cbe211/mzaf_5653537699505456197.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 1,
      trackTimeMillis: 207679,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1469577723,
      trackId: 1469577741,
      artistName: 'Jack Johnson',
      collectionName:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
      trackName: 'Upside Down',
      collectionCensoredName:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
      trackCensoredName: 'Upside Down',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/75/5a/fc/755afca1-d911-be2b-c0fb-f99d6d52ce1a/mzaf_4156076990936187406.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2006-02-06T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 1,
      trackTimeMillis: 208643,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857898,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Sitting, Waiting, Wishing',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Sitting, Waiting, Wishing',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/sitting-waiting-wishing/1440857781?i=1440857898&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/sitting-waiting-wishing/1440857781?i=1440857898&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/27/e6/28/27e628bb-17cb-eb94-87b4-d0f9b7ff1ebc/mzaf_20190415424710808.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 6,
      trackTimeMillis: 183721,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857795,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Banana Pancakes',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Banana Pancakes',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/51/ba/f8/51baf8ca-e417-56e8-d6e1-4f02634e451c/mzaf_5766837215935557210.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 3,
      trackTimeMillis: 191854,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857797,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Good People',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Good People',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/d2/bf/ba/d2bfba21-a41e-c4f0-cfb7-c83420a77336/mzaf_3810532136343461295.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 4,
      trackTimeMillis: 208509,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857908,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Breakdown',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Breakdown',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/breakdown/1440857781?i=1440857908&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/breakdown/1440857781?i=1440857908&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/85/ae/a8/85aea863-ed49-6ab9-bf58-cee20cd312fc/mzaf_4839543551345827301.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 11,
      trackTimeMillis: 212986,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440851963,
      trackId: 1440851968,
      artistName: 'Jack Johnson',
      collectionName: 'To the Sea (Bonus Track Version)',
      trackName: 'You and Your Heart',
      collectionCensoredName: 'To the Sea (Bonus Track Version)',
      trackCensoredName: 'You and Your Heart',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/16/10/ff/1610fffd-afb3-c914-ab3c-b58ba93d06b1/mzaf_356097296229876349.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2010-04-06T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 1,
      trackTimeMillis: 192853,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440854851,
      trackId: 1440855373,
      artistName: 'Jack Johnson',
      collectionName: 'Sleep Through the Static',
      trackName: 'If I Had Eyes',
      collectionCensoredName: 'Sleep Through the Static',
      trackCensoredName: 'If I Had Eyes',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/if-i-had-eyes/1440854851?i=1440855373&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/if-i-had-eyes/1440854851?i=1440855373&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/bf/d2/ad/bfd2ad0d-0e1e-20d1-0a73-898c1b1badcf/mzaf_5135296513885819410.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/100x100bb.jpg',
      collectionPrice: 13.99,
      trackPrice: 1.29,
      releaseDate: '2007-12-15T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 6,
      trackTimeMillis: 238806,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440854851,
      trackId: 1440855248,
      artistName: 'Jack Johnson',
      collectionName: 'Sleep Through the Static',
      trackName: 'Angel',
      collectionCensoredName: 'Sleep Through the Static',
      trackCensoredName: 'Angel',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/57/93/94/57939483-f16a-3fee-dd39-de7df73e8413/mzaf_5320784781866992253.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/100x100bb.jpg',
      collectionPrice: 13.99,
      trackPrice: 1.29,
      releaseDate: '2008-02-02T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 4,
      trackTimeMillis: 122694,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440857781,
      trackId: 1440857917,
      artistName: 'Jack Johnson',
      collectionName: 'In Between Dreams (Bonus Track Version)',
      trackName: 'Do You Remember',
      collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
      trackCensoredName: 'Do You Remember',
      artistViewUrl:
        'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/do-you-remember/1440857781?i=1440857917&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/do-you-remember/1440857781?i=1440857917&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/da/c5/2d/dac52de0-55e9-8585-f91c-f92ffc519a59/mzaf_7471265503660630513.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2005-03-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 13,
      trackTimeMillis: 144006,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
  ],
};

const fetchSongResults = async term => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        term,
      )}&media=music&entity=song`,
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    return new Error('Something went wrong, please try again');
  }
};

export default class SearchList extends Component {
  state = {
    data: null,
    isLoading: false,
  };

  onChangeText = async text => {
    this.setState({ isLoading: true });
    const data = await debounce(() => fetchSongResults(text), 300);
    this.setState({ data, isLoading: false });
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this.onChangeText} isLoading={isLoading} />
        <SongList data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});