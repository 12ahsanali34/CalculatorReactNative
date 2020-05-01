import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const History = (props) => {
  return (
    <View style={styles.container}>
       {props.showBack && 
        <View style={{width:'100%'}}>
            <Text 
              onPress={props.onClose}
              style={styles.back}>
              Back
          </Text>
       </View>}
       <View>
          {props.data.map((res,i)=>{
              return(
                  <Text style={styles.text} key={i}>{res}</Text>
              )
          })}
       </View>
        {props.data.length !== 0 && 
          <TouchableOpacity
            style={styles.clear}
            onPress={props.onClear}>
            <Text 
                style={styles.clearText}>
                CLEAR
            </Text>
        </TouchableOpacity>}
    </View>
  );
};
export default History;
