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

const Modales = ({setModal}) => {
  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <ScrollView>
            <Text style={globalStyles.titulos}>Agendar Citas</Text>
            <Image
            source={require("../assets/img/principal/calendario.png")}
            style={globalStyles.img}
            />

            <View style={globalStyles.containTxt} >
                <Text style={globalStyles.txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>

            <Pressable style={globalStyles.btnVolver} onPress={()=> setModal(false)}>
                <Text style={globalStyles.txtVolver}>Volver</Text>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Modales;