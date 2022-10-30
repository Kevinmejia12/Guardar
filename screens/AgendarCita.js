import React,{useState,useEffect} from 'react';
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
  Alert,
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import { Picker } from '@react-native-picker/picker';

const AgendarCita = ({navigation}) => {
    const [falso,setFalso] = useState(false)
    const [medico,setMedico] = useState();
    const [dia,setDia] = useState();
    const [hora,setHora] = useState();

    useEffect(()=> {
        
    })
    return(
        <SafeAreaView style={globalStyles.containerAll}>
            <Text style={globalStyles.titulos}>Agendar Cita</Text>
            <Picker
            style={styles.pickers}
            selectedValue={medico}
            onValueChange={(itemValue, itemIndex) => {
                setMedico(itemValue)
                setFalso(true)
            } 
            }>  
                <Picker.Item label="Seleccione un medico" value="0"/>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            
            <Picker
            style={styles.pickers}
            selectedValue={dia}
            onValueChange={(itemValue, itemIndex) => {
                setDia(itemValue)
                setFalso(true)
            } 
            }>  
                <Picker.Item label="Seleccione un Dia" value="0"/>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Picker
            style={styles.pickers}
            selectedValue={hora}
            onValueChange={(itemValue, itemIndex) => {
                setHora(itemValue)
                setFalso(true)
            } 
            }>  
                <Picker.Item label="Seleccione una Hora" value="0"/>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Pressable style={globalStyles.btnVolver} onPress={()=> console.log("hola1")}>
                <Text style={globalStyles.txtVolver}>Registrar Cita</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pickers:{
        backgroundColor:"#fff",
        marginTop:20,
    }
});

export default AgendarCita;