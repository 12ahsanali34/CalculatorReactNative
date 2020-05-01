import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const Buttons = (props) => {
  return (
      <TouchableOpacity 
        onPress={()=>props.onPress(props.text)}
        style={props.background ? {...styles.box, width:props.width, backgroundColor:props.background}:{...styles.box, width:props.width}}>
          <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
  );
};
export default Buttons;
