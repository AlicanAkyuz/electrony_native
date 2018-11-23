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
  },
  iversifyText: {
    color: '#FEF6AF',
    fontSize: 50,
  },
  subtext: {
    marginTop: '25%',
    color: '#c5c5c5',
    fontSize: 25
  },
  button: {
    backgroundColor: '#7D2C1A',
    borderRadius: 10,
    marginTop: '30%'
  },
  buttonText: {
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingRight: '10%',
    paddingLeft: '10%',
    color: '#c5c5c5',
    fontSize: 25
  }
});

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleHolder}>
          <Text style={styles.SoundText}>
            Sound
          </Text>
          <Text style={styles.iversifyText}>
            iversify
          </Text>
        </View>
        <View style={styles.subtextHolder}>
          <Text style={styles.subtext}>
            Music Beyond Genres
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.handleClick} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}
