import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/welcome.js';
import Select from '../components/select.js';
import { StyleSheet,
         Text,
         View,
         TouchableHighlight,
         TouchableOpacity,
         ScrollView
       } from 'react-native';
import { onFirstClick,
         onValueChange,
         onFontLoaded
       } from '../actions/navigation_actions/actions';

class Entrance extends React.Component {
  render() {
    let componentRender;
    this.props.enter_clicked === false ?
    componentRender =
    <Welcome handleClick={() => {this.props.dispatch(onFirstClick())}}
             handleFontLoad={() => {this.props.dispatch(onFontLoaded())}}
             fontLoaded={this.props.fontLoaded} /> :
    componentRender =
    <Select valueChange={(value) => {this.props.dispatch(onValueChange(value))}}
            dancebility={this.props.dancebility} />

    return <View style={{ flex: 1 }}>{componentRender}</View>
  }
}

const mapStateToProps = (state) => ({
  enter_clicked: state.NavigationReducer.enter_clicked,
  dancebility: state.NavigationReducer.dancebility,
  fontLoaded: state.NavigationReducer.fontLoaded
});

export default connect(mapStateToProps)(Entrance);
