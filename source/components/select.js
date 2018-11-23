import React from 'react';
import { StyleSheet,
         Text,
         View,
         TouchableHighlight,
         TouchableOpacity,
         ScrollView,
         Picker
       } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c5c5c5',
    alignItems: 'center'
  },
  titleHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
  SoundText: {
    color: '#7D2C1A',
    fontSize: 50,
  },
  picker: {
    height: 10,
    width: 150,
    backgroundColor: 'white'
  }
});

export default class Select extends React.Component {
  render() {
    return (
      <View style={styles.titleHolder}>
        <Text style={styles.SoundText}>
          Dancebility
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.props.dancebility}
          onValueChange={(itemValue, itemIndex) => {this.props.valueChange(itemValue)}}>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="0.1" value="0.1" />
          <Picker.Item label="0.2" value="0.2" />
          <Picker.Item label="0.3" value="0.3" />
          <Picker.Item label="0.4" value="0.4" />
          <Picker.Item label="0.5" value="0.5" />
          <Picker.Item label="0.6" value="0.6" />
          <Picker.Item label="0.7" value="0.7" />
          <Picker.Item label="0.8" value="0.8" />
          <Picker.Item label="0.9" value="0.9" />
          <Picker.Item label="1" value="1" />
        </Picker>
      </View>
    );
  }
}
