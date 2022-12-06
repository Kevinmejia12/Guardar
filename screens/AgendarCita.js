import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';
const AgendarCita = (setRecargar) => {
    const [falso,setFalso] = useState(false)
    const [medico,setMedico] = useState("");
    const [horas,setHoras] = useState(new Date());
    const [fecha,setFecha] = useState(new Date());
    const [minima,setMinima] = useState(new Date());
    const [dia,setDia] = useState("")
    const [hora,setHora] = useState("")
    
    const addCita = async () => {
        if([medico].includes("")) {
            Alert.alert(
                "Error",
                "Escoga un medico para continuar"
            )
            return
        }
        const hora = horas.getHours() + ":" + horas.getMinutes()
        const dia = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate()
        const obj = {dia,hora,medico}
        const respuesta = await axios.post("http://192.168.3.120/prueba/", obj)
        console.log(obj)
        alert(respuesta.data.msg)
    }

    return(
        <SafeAreaView style={globalStyles.containerAll}>
            <Text style={globalStyles.titulos}>Agendar Cita</Text>
            <Picker
            style={styles.pickers}
            selectedValue={medico}
            onValueChange={(itemValue, itemIndex) => {
                setMedico(itemValue)
                setFalso(true)
                console.log("Hola")
            }
            }>  
                <Picker.Item label="Seleccione un medico" value= ""/>
                <Picker.Item label="Giron Peregrina" value="Giron Peregrina" />
                <Picker.Item label="Kevin Jaime" value="Kevin Jaime" />
                <Picker.Item label="Jose Manuel" value="Jose Manuel" />
            </Picker>
            <Text style={styles.labels}>Seleccione un dia</Text>
            <DatePicker
            date={fecha}
            locale="es"
            mode="date"
            style={styles.fechas}
            onDateChange={(date)=> setFecha(date)}
            minimumDate={minima}
            />
            <Text style={styles.labels}>Seleccione una hora</Text>
            <DatePicker
            date={horas}
            mode="time"
            style={styles.fechas}
            onDateChange={(time)=> setHoras(time)}
            />
            <Pressable style={globalStyles.btnVolver} onPress={()=> addCita()}>
                <Text style={globalStyles.txtVolver}>Registrar Cita</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pickers:{
        backgroundColor:"#fff",
        marginTop:20,
    },
    labels:{
        marginLeft:16,
        marginTop:20,
        color:"#000",
        fontSize:16,
        fontWeight:"400",
        marginBottom:20
    },
    fechas:{
        alignSelf:"center"
    }
});

export default AgendarCita;