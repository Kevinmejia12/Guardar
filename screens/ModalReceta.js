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

const ModalReceta = ({setModalReceta}) => {
  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <ScrollView>
            <Text style={globalStyles.titulos}>Receta medica </Text>
            <Image
            source={require("../assets/img/principal/descargar.jpg")}
            style={globalStyles.imgReceta}
            />
            <Pressable style={globalStyles.btnVolver} onPress={()=> setModalReceta(false)}>
                <Text style={globalStyles.txtVolver}>Volver</Text>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});

export default ModalReceta;