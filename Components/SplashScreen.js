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

export default class SplashScreen extends React.Component{

  MoveNextPage=()=>{
    this.props.navigation.navigate("Head")
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
        <TouchableOpacity style={styles.Touch} onPress={this.MoveNextPage}>
          <Image 
            source={require("../assets/logo.png")} 
            style={{height:Dev_Height-(Dev_Height*0.5),
            width:Dev_Width-(Dev_Width*0.5),
            borderRadius:15
            }} 
            resizeMode="contain"
          /> 
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
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#121212"
    },
    Touch:{
      justifyContent:"center",
      alignItems:"center",
      height:Dev_Height,
      width:Dev_Width
    }
})