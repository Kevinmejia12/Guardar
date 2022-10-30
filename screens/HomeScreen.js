import React,{useState} from 'react';
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
  Modal
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import Modales from './Modal';
import Modales2 from './Modal2';
import Modales3 from './Modal3';

const HomeScreen = ({navigation}) => {
  const [modal,setModal] = useState(false)
  const [modal2,setModal2] = useState(false)
  const [modal3,setModal3] = useState(false)

  return(
    <SafeAreaView style={globalStyles.containerAll}>
        <ScrollView>
          <View style={styles.containerOps}> 
            <Text style={styles.titulo}>Medic<Text style={styles.titulo2}>App</Text> </Text>
            <View style={styles.containerOps2}>
              <View style={styles.containerbtn}>
                <Pressable onPress={()=> navigation.navigate("AgendarCita") }>
                  <Image
                  source={require("../assets/img/botones/reloj.png")}
                  style={styles.btn}
                  />
                </Pressable>
              </View>
              <View style={styles.containerbtn}>
                <Pressable onPress={()=> navigation.navigate("Historial")}>
                  <Image
                  source={require("../assets/img/botones/historial2.png")}
                  style={styles.btn}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <Text style={styles.txt1}>¿Que hacemos?</Text>
          <View style={styles.containerQ}>
            <Text style={styles.txtQ}>Somos un equipo constriuido para facilitar el acceso a sus servicios medicos, al igual que a su historial de citas medicas con el fin de mejorar el servicio ofrecido al cliente</Text>
          </View>
          <Text style={styles.txt1}>Nuestros servicios</Text>

          <Pressable style={styles.btnModal} onPress={()=> setModal(true)}>
            <Image
            source={require("../assets/img/principal/calendario.png")}
            style={styles.modales}
            />
            <Text style={styles.txtModal}>Agendar citas</Text>
          </Pressable>

          <Pressable style={styles.btnModal} onPress={()=> setModal2(true)}>
            <Image
            source={require("../assets/img/principal/historial.png")}
            style={styles.modales}
            />
            <Text style={styles.txtModal}>Historial de citas</Text>
          </Pressable>

          <Pressable style={styles.btnModal} onPress={()=> setModal3(true)}>
            <Image
            source={require("../assets/img/principal/receta.png")}
            style={styles.modales}
            />
            <Text style={styles.txtModal}>Recetas medicas</Text>
          </Pressable>
        </ScrollView>

        <Modal
        visible={modal}
        animationType={"slide"}
        >
          <Modales 
          setModal={setModal}
          />
        </Modal>
        <Modal
        visible={modal2}
        animationType={"slide"}
        >
          <Modales2
          setModal2={setModal2}
          />
        </Modal>
        <Modal
        visible={modal3}
        animationType={"slide"}
        >
          <Modales3 
          setModal3={setModal3}
          />
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerOps:{
    flexDirection:"row",
    paddingHorizontal:10,
    justifyContent:"space-between",
    paddingVertical:5
  },
  titulo:{
    marginTop:5,
    fontSize:30,
    color:"#000"
  },
  titulo2:{
    fontSize:35,
    color:"#0F74F2",
    fontWeight:"bold"
  },
  btn:{
    width:50,
    height:50
  },
  containerOps2:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:200,
    paddingHorizontal:10
  },
  containerbtn:{
    backgroundColor:"#fff",
    paddingHorizontal:15,
    alignItems:"center",
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    paddingVertical:5,
  },
  txt1:{
    fontSize:25,
    alignSelf:"center",
    marginTop:30,
    color:"#000",
    fontWeight:"500"
  },
  containerQ:{
    alignSelf:"center",
    alignItems:"center",
    marginTop:15,
    width:280,
    backgroundColor:"#fff",
    paddingVertical:25,
    paddingHorizontal:20,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  txtQ:{
    fontSize:18,
    color:"#000"
  },
  btnModal:{
    width:250,
    alignSelf:"center",
    alignItems:"center",
  },
  modales:{
    width:300,
    height:300,
    resizeMode:"contain"
  },
  txtModal:{
    fontSize:20,
    color:"#000",
    marginTop:-20
  }
});

export default HomeScreen;