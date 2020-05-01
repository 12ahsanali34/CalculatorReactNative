import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';


const Routes = () => {
  const Stack = createStackNavigator();
  return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};
export default Routes;
