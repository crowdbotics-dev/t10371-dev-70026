import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'John Doe',
  image: 'https://i.imgur.com/8ZfWgpy.jpg',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}];

const ItemComponent = ({
  item,
  id,
  separator
}) => {
  return <View style={styles.item}>
    <Image style={styles.avatar} source={{
      uri: item.image
    }} />
    <View style={styles.messageContainer}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>;
};

const App = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={ItemComponent} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: 'white',
    borderColor: '#F7F7F7',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18
  },
  message: {
    color: '#9B9B9B',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 12
  },
  messageContainer: {
    marginLeft: 10,
    width: '100%'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white'
  }
});
export default App;