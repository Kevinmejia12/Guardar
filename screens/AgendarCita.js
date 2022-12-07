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
    //pickers
    const [falso,setFalso] = useState(false)
    const [medico,setMedico] = useState("");
    const [horas,setHoras] = useState(new Date());
    const [fecha,setFecha] = useState(new Date());
    const [minima,setMinima] = useState(new Date());
    const [medicos,setMedicos] = useState([])

    //ubicacion del medico
    const[ubicacion,setubicacion] = useState("")

    const getUbicacion = async (itemValue) => {
        const respuesta = await axios.get("http://192.168.1.83/prueba2/")
        setubicacion(respuesta.data[itemValue].ubicacion)
    }

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
        const respuesta = await axios.post("http://192.168.1.83/prueba/", obj)
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
                getUbicacion(itemValue)
                setFalso(true)
            }
            }>  
                <Picker.Item label="Seleccione un medico" value= ""/>
                <Picker.Item label="Kevin Jaime" value="0" />
                <Picker.Item label="Giron Peregrina" value="1" />
                <Picker.Item label="Eduardo Elric" value="2" />
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