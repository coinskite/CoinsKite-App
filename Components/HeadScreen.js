import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import  Icon from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient';

export default class HeadScreen extends React.Component{

  onPressRegister=()=>{
    this.props.navigation.navigate("Name")
  }

  onPressClose=()=>{
    this.props.navigation.navigate("Splash")
  }

  onPressLogin=()=>{
    this.props.navigation.navigate("Login")
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
        <View style={styles.close_view}>
          <TouchableOpacity style={styles.close_touch} onPress={this.onPressClose}>
            <Icon name="close" size={30} color="#FFF" style={styles.close_style} />
          </TouchableOpacity>
        </View> 

        <View style={styles.name_view}>  
          <Text style={styles.name_text}> CoinsKite </Text>
        </View>

          <Image source={require("../assets/logo_green.png")} style={styles.logo_style}/>

        <View style={styles.promo_text_view}>
          <Text style={styles.promo_text}>Register For Access To our Data</Text>
          <Text style={styles.promo_text}>On Multiple Devices</Text>
        </View>

        <View style={{height:"8%",width:"100%"}}> 
        </View>
        
        <TouchableOpacity style={styles.Button_View} onPress={this.onPressRegister}>
          <LinearGradient colors={['#ADFF2F','#32CD32']} style={styles.Button_Style}>
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button_View1} onPress={this.onPressLogin}>
          <LinearGradient colors={['#ADFF2F','#32CD32']} style={styles.Button_Style1}>
            <Text style={styles.buttonText1}>
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:Dev_Height,
        width:Dev_Width,
        backgroundColor:"#121212"
    },
    close_view:{
      height:"15%",
      width:"100%",
    },
    close_style:{
      marginRight:"10%"
    },
    close_touch:{
      height:"100%",
      width:"100%",
      alignItems:"flex-end",
      justifyContent:"center"
    },
    name_view:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    name_text:{
      fontSize:24,
      color:"#FFF"
    },
    logo_style:{
      height:"20%",
      width:"27%",
      marginLeft:"37%",
      marginTop:"5%"
    },
    promo_text_view:{
      height:"15%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"10%"
    },
    promo_text:{
      fontSize:19,
      color:"#FFF",
      marginTop:"2%"
    },
    Button_View:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    Button_Style:{
      height:"80%",
      width:"70%",
      borderRadius:45,
      alignItems:"center",
      justifyContent:"center"
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: '#ffffff'
    },
    Button_View1:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    Button_Style1:{
      height:"80%",
      width:"70%",
      borderRadius:45,
      alignItems:"center",
      justifyContent:"center"
    },
    buttonText1: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: '#ffffff'
    },
})