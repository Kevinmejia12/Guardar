import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    containerAll:{
        flex:1,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingHorizontal:10
    },
    titulos:{
        fontSize:24,
        color:"#000",
    },
    img:{
        width:300,
        height:300,
        alignSelf:"center",
        resizeMode:"contain"
    },
    containTxt:{
        backgroundColor:"#fff",
        width:270,
        marginTop:-10,
        alignSelf:"center",
        alignItems:"center",
        paddingVertical:30,
        paddingHorizontal:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    txt:{
        fontSize:17,
        color:"#000"
    },
    btnVolver:{
        alignSelf:"center",
        marginTop:35,
        backgroundColor:"#0F74F1",
        paddingHorizontal:30,
        paddingVertical:8,
        borderRadius:10
    },
    txtVolver:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    }
})

export default globalStyles;