import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardView extends Component {
  render() {
    const { cardElevation, cornerRadius, shadowOpacity = 0.24 } = this.props;
    if(cardElevation > 0) {
      return(
        <View style={[{
          shadowOffset: {
            width: 0,
            height: cardElevation
          },
          shadowRadius: cardElevation,
          shadowOpacity: shadowOpacity,
          borderRadius: cornerRadius,
          backgroundColor: 'white',
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    } else {
      return(
        <View style={[{
          borderRadius: cornerRadius,
          backgroundColor: 'white',
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    }

  }
}
