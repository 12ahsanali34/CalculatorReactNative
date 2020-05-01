import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#60499d'}}>
        <Routes/>
    </SafeAreaView>
  );
};
export default App;
