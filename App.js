import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AgendarCita from './screens/AgendarCita';
import Historial from './screens/Historial';

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name='Login'
        component={Login}
        />
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        />
        <Stack.Screen
        name='AgendarCita'
        component={AgendarCita}
        />
        <Stack.Screen
        name='Historial'
        component={Historial}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
