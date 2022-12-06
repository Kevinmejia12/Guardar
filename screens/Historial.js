import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Pressable
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import axios from 'axios';
import ModalReceta from './ModalReceta';

const Historial = (recargar,setRecargar) => {
  const [listaCitas,setListaCitas] = useState([])
  const [modalReceta,setModalReceta] = useState(false)

  useEffect(()=> {
    if(recargar){
      getCitas()
      console.log("activado")
    }
  },[recargar])

  const getCitas = async () => {
    const respuesta = await axios.get("http://192.168.3.120/prueba/")
    setListaCitas(respuesta.data)
    setRecargar(false)
  }

  const renderItem = ({item}) => {
    return(
      <Pressable style={styles.containerCita} onPress={()=> setModalReceta(true)} >
        <Text style={styles.txt1}>Cita del dia: <Text style={styles.txt2}>{item.dia}</Text></Text>
        <Text style={styles.txt1}>Hora de la cita: <Text style={styles.txt2}>{item.hora}</Text></Text>
        <Text style={styles.txt1}>Medico de la cita: <Text style={styles.txt2}>{item.medico}</Text></Text>
      </Pressable>
    )
  }

  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <Text style={globalStyles.titulos}>Historial de citas</Text>
        <FlatList
        data={listaCitas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
        <Modal
        visible={modalReceta}
        animationType="slide"
        >
          <ModalReceta
          setModalReceta={setModalReceta}
          />
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerCita:{
    marginVertical:10,
    backgroundColor:"#FBFBFB",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal:5
  },
  txt1:{
    color:"#000",
    fontSize:20
  },
  txt2:{
    color:"#0F74F1",
    fontWeight:"bold"
  }
});

export default Historial;