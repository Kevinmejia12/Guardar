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
  Alert
} from 'react-native';
import globalStyles from '../assets/css/globalStyles';

const Login = ({navigation}) => {
  const [clave,setClave] = useState("");
  
  const verificar = () => {
    if(clave == "prueba" ){
      navigation.navigate("HomeScreen")
      setClave("")
    }else if(clave == "Prueba" ){
      navigation.navigate("HomeScreen")
      setClave("")
    }else{
      Alert.alert(
        "Error",
        "Credencial incorrecta"
      )
    }
  }
  return(
    <SafeAreaView style={globalStyles.containerAll}>
      <Text style={styles.titulo}>Medic<Text style={styles.titulo2}>App</Text></Text>
      <Image
      source={require("../assets/img/login/Login.jpg")}
      style={styles.img}
      />
      <View style={styles.containerlogin}>
        <TextInput 
        placeholder='Clave de registro'
        style={styles.input}
        maxLength={20}
        value={clave}
        onChangeText={setClave}
        />
        <Pressable style={styles.btnLogin} onPress={()=> verificar()}>
            <Image
            source={require("../assets/img/botones/avanzar.png")}
            style={styles.img2}
            />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:30,
    color:"#000"
  },
  titulo2:{
    fontSize:35,
    color:"#0F74F2",
    fontWeight:"bold"
  },
  containerImg:{
    paddingHorizontal:10,
    backgroundColor:"red",
    alignItems:"center"
  },
  img:{
    marginTop:-50,
    width:320,
    height:320,
    alignSelf:"center",
    resizeMode:"contain",
  },
  containerlogin:{
    width:350,
    height:250,
    backgroundColor:"#fff",
    alignSelf:"center",
    justifyContent:"center",
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
    paddingHorizontal:6
  },
  input:{
    paddingHorizontal:10,
    paddingVertical:12,
    borderRadius:10,
    borderColor:"#E7E6E6",
    borderWidth:1.5,
    fontSize:18
  },
  btnLogin:{
    backgroundColor:"#0F74F2",
    position:"absolute",
    right:-10,
    bottom:-20,
    paddingHorizontal:10,
    alignItems:"center",
    borderRadius:10
  },
  img2:{
    width:60,
    height:60,
  }
});

export default Login;