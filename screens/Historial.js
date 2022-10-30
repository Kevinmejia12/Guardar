import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Pressable,
  Alert
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';

const Historial = () => {
  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <Text style={globalStyles.titulos}>Historial de citas</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Historial;