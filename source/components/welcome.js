import React from 'react';
import { Font } from 'expo';
import { StyleSheet,
         Text,
         View,
         TouchableHighlight,
         TouchableOpacity,
         ScrollView,
         ProgressViewIOS
       } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loading: {
    color: '#7D2C1A',
    fontSize: 40,
  },
  progressView: {
    marginTop: 100,
    width: 300,
  },
  titleHolder: {
    display: 'flex',
    flexDirection: 'row',

  },
  SoundText: {
    fontFamily: 'montserrat-regular',
    color: '#7D2C1A',
    fontSize: 50,
  },
  iversifyText: {
    fontFamily: 'montserrat-regular',
    color: '#FEF6AF',
    fontSize: 50,
  },
  subtext: {
    marginBottom: '50%',
    fontFamily: 'montserrat-light',
    marginTop: '20%',
    color: '#c5c5c5',
    fontSize: 25
  },
  buttonHolder: {
    backgroundColor: '#7D2C1A',
    borderRadius: 10,
    marginBottom: '30%',
  },
  buttonText: {
    fontFamily: 'montserrat-thin',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingRight: '7%',
    paddingLeft: '7%',
    color: 'white',
    fontSize: 25
  },
  brandText: {
    marginBottom: '10%',
    fontFamily: 'montserrat-medium',
    color: '#c5c5c5',
    fontSize: 12
  }
});

export default class Welcome extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
      'montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'montserrat-medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-thin': require('../../assets/fonts/Montserrat-Thin.ttf'),
      'roboto': require('../../assets/fonts/Roboto-Bold.ttf'),
      'roboto-light': require('../../assets/fonts/Roboto-Light.ttf'),
      'roboto-medium': require('../../assets/fonts/Roboto-Medium.ttf'),
      'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
      'roboto-thin': require('../../assets/fonts/Roboto-Thin.ttf'),
    });
    this.props.handleFontLoad();
  };

  render() {
    let fontLoadReturn;
    this.props.fontLoaded === false ?
      fontLoadReturn =
      <View style={styles.container}>
          <Text style={styles.loading}>
            Loading...
          </Text>
        <ProgressViewIOS trackTintColor="#c5c5c5" progressTintColor="#7D2C1A" style={styles.progressView} progress={0.8}/>
      </View> :
      fontLoadReturn =
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
          <View style={styles.buttonHolder}>
            <Text style={styles.buttonText}>Explore</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.brandHolder}>
          <Text style={styles.brandText}>
            @Created by Alican Akyuz, 2018
          </Text>
        </View>
      </View>

    return <View style={{flex: 1}}>{fontLoadReturn}</View>
  }
}
