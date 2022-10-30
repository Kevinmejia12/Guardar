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

const Modales2 = ({setModal2}) => {
  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <ScrollView>
            <Text style={globalStyles.titulos}>Historial Medico</Text>
            <Image
            source={require("../assets/img/principal/historial.png")}
            style={globalStyles.img}
            />

            <View style={globalStyles.containTxt} >
                <Text style={globalStyles.txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>

            <Pressable style={globalStyles.btnVolver} onPress={()=> setModal2(false)}>
                <Text style={globalStyles.txtVolver}>Volver</Text>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Modales2;