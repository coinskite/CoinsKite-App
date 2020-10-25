import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

export default class SavedScreen extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
        <View style={styles.Saved_View}>
            <Text style={styles.no_saved_text}> No Saved Articles </Text>
            <Image source={require("./logo_green.png")} style={styles.logo_style}/>
        </View> 

        <View style={styles.tip_view}>
          <Text style={styles.tip_text}>Save stories to read them later by tapping the </Text>
          <Text style={styles.tip_text}>Bookmark Icon </Text>
        </View>
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
    Saved_View:{
      backgroundColor:"#263137",
      height:"40%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    no_saved_text:{
      fontSize:18,
      color:"#FFF"
    },
    logo_style:{
      height:"40%",
      width:"20%",
      marginTop:"5%"
    },
    tip_view:{
      height:"20%",
      justifyContent:"center",
      alignItems:"center",
      width:"100%"
    },
    tip_text:{
      color:"#FFF",
      fontSize:16
    }
})