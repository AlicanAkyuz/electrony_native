import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,
         Text,
         View,
         TouchableHighlight,
         TouchableOpacity,
         ScrollView
       } from 'react-native';
import { onFirstClick } from '../actions/navigation_actions/actions';
import Welcome from '../components/welcome.js';
import Select from '../components/select.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


class Entrance extends React.Component {
  render() {
    let componentRender;
    if (this.props.enter_clicked === false) {
      componentRender =
      <Welcome
        handleClick={() => {this.props.dispatch(onFirstClick())}}
      />
    } else {
      componentRender =
      <Select />
    }

    return (
      <View style={styles.container}>
        {componentRender}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  enter_clicked: state.NavigationReducer.enter_clicked,
});


export default connect(mapStateToProps)(Entrance);
