import React from 'react';
import { StyleSheet,
         Text,
         View,
         TouchableHighlight,
         TouchableOpacity,
         ScrollView
       } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
  SoundText: {
    color: '#7D2C1A',
    fontSize: 50,
  }
});

export default class Select extends React.Component {
  render() {
    return (
      <View style={styles.titleHolder}>
        <Text style={styles.SoundText}>
          ZAAAA
        </Text>
      </View>
    );
  }
}
