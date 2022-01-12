import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const CustomButton = ({ 
  text,
  onPress,
  icon
}) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
      <Text style={buttonStyles.buttonText}>{text}</Text>
       {icon}
      </View>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#79B4B7',
    borderRadius: 6
  },
  buttonText: {
    fontFamily: 'Sunflower-Medium',
    fontSize: 12,
    color: '#ffffff',
    marginHorizontal: 8
  }
});


export default CustomButton;