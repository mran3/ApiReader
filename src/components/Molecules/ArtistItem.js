import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Linking,
  StyleSheet,
  Image,
  } from 'react-native';

function ArtistItem(props) {
  const artist = props.artist;

  function openArtistPage(url) {
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity onPress={() => openArtistPage(artist.url)}>    
      <View style={styles.listItem}>
        <View>
        <Text style={styles.sectionTitle}>{artist.name}</Text>
        <Text style={styles.sectionDescription}>Listeners: {artist.listeners}</Text>
        <Text style={styles.sectionDescription}>Streamable: {artist.streamable == '0' ? 'No' : 'Yes'}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Image style={styles.chevron}
          source={require('ApiReader/src/img/chevron.png')}
          />
        </View>
        
      </View>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#BA0006',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 21,    
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
  },
  chevron: {
    width: 30,
    height: 30,    
    margin: 'auto',    
  },
  chevronContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default ArtistItem;
