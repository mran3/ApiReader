import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList
} from 'react-native';
import ArtistItem from './src/components/Molecules/ArtistItem';
import LastFMService from './src/services/lastfm'

function App(props) {

  // MARK: Rendering
  const [artistData, setArtistData] = useState({
    topartists: { artist: [] }
  });

  const renderArtist = ({ item }) => (
    <ArtistItem artist={item} />
  );

  useEffect(() => {
    fetchData = async () => {
      const results = await LastFMService.getTopArtists();
      setArtistData(results);
    }
    fetchData()
      .catch((error) => {
        alert('error: ' + error);
      });
  }, [])

  return (
    <>
      <StatusBar/>
      <SafeAreaView>
        <View style={styles.listTitleContainer}>
          <Text style={styles.listTitle}>Last FM Spain</Text>
          <Text style={styles.listTitle}>Most Listened</Text>          
        </View>
        <FlatList
          data={artistData.topartists.artist}
          renderItem={renderArtist}
          keyExtractor={artist => artist.mbid}
        />
      </SafeAreaView>
    </>
  );

};

const styles = StyleSheet.create({
  listTitleContainer: {
    padding: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#410302',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    
  },
});

export default App;
