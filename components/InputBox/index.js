import React from 'react';
import {
  TextInput
} from 'react-native';

const Input = (props) => {
  return (
        <TextInput
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
            style={{...props.style, color:'#fff', textAlign:'right', paddingHorizontal:10}}
            keyboardType="number-pad"
        />
  );
};
export default Input;
