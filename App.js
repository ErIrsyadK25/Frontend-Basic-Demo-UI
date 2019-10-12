import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';

import Heading from './src/components/Heading';
import Hero from './src/components/Hero';
import LatestMembers from './src/components/LatestMembers';
import Mosiac from './src/components/Mosiac';

import data from './src/config/data';

class App extends Component {
  state = {
    data: data,
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Heading />
            <Hero />
            <LatestMembers />
          </View>
          <View>
            <Text style={styles.day}>Monday</Text>
          </View>
          <Mosiac />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              paddingLeft: 6,
            }}>
            News
          </Text>

          <FlatList
            style={{width: '100%'}}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.rowStyle}>
                <View style={styles.imageContainer}>
                  <Image source={{uri: item.image_link}} style={styles.image} />
                </View>
                <View style={styles.rightSideContent}>
                  <Text
                    style={{
                      width: 90,
                      backgroundColor: '#7bed9f',
                      textAlign: 'center',
                      borderTopLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      paddingVertical: 2,
                    }}>
                    {item.type}
                  </Text>
                  <Text style={styles.headline}>{item.headline}</Text>
                  <View style={styles.avatarAndCaption}>
                    <Image
                      source={{uri: item.user_avatar}}
                      style={{height: 24, width: 24, borderRadius: 12}}
                    />
                    <Text style={{paddingLeft: 10}}>{item.username}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#ff2d91',
  },
  day: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#a4b0be',
    padding: 5,
    margin: 5,
  },
  imageContainer: {
    height: 120,
    width: Dimensions.get('window').width / 3 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  rightSideContent: {
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 8,
  },
  headline: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatarAndCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
  },
});

export default App;
