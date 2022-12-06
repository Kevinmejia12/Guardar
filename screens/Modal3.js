import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';

const Modales3 = ({setModal3}) => {
  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <ScrollView>
            <Text style={globalStyles.titulos}>Recetas Medicas</Text>
            <Image
            source={require("../assets/img/principal/receta.png")}
            style={globalStyles.img}
            />

            <View style={globalStyles.containTxt} >
                <Text style={globalStyles.txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>

            <Pressable style={globalStyles.btnVolver} onPress={()=> setModal3(false)}>
                <Text style={globalStyles.txtVolver}>Volver</Text>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Modales3;