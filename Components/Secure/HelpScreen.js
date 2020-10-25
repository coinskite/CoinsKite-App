import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import Icon from "react-native-vector-icons/AntDesign"

export default class HelpScreen extends React.Component{
  
  onPressIcon=()=>{
    this.props.navigation.navigate("Setting")
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
      <TouchableOpacity  onPress={this.onPressIcon}>
        <Icon name="left" color="#FFF" size={24} style={styles.back_icon}/>
      </TouchableOpacity>

          <View style={styles.logo_view}>
            <Image source={require("../logo_green.png")} style={styles.logo_style}/>
        </View> 

        <View style={styles.text_view }>
          <Text style={styles.text_style}> CONTACT & SUPPORT </Text>
        </View>

        <View style={styles.button_view}>
        <TouchableOpacity style={styles.button_style}>
            <Image source={{uri:"https://img.icons8.com/fluent/48/000000/email-open.png"}} style={styles.text_logo_style}/>
            <Text style={styles.button_text}>E-Mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_style}>
            <Image source={{uri:"https://img.icons8.com/fluent/96/000000/instagram-new.png"}} style={styles.text_logo_style}/>
            <Text style={styles.button_text}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_style}>
            <Image source={{uri:"https://img.icons8.com/fluent/48/000000/telegram-app.png"}} style={styles.text_logo_style}/>
            <Text style={styles.button_text}>Telegram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_style}>
            <Image source={{uri:"https://img.icons8.com/fluent/48/000000/twitter.png"}} style={styles.text_logo_style}/>
            <Text style={styles.button_text}>Twitter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_style}>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/medium-logo.png"}} style={styles.text_logo_style}/>
            <Text style={styles.button_text}>Medium</Text>
          </TouchableOpacity>
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
    back_icon:{
      marginLeft:"10%",
      marginTop:"10%"
    },  
    logo_view:{
      height:"20%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    logo_style:{
      height:"92%",
      width:"25%"
    },
    text_view:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    text_style:{
      fontSize:25,
      color:"#FFF",
      fontWeight:"bold"
    },
    button_view:{
      height:"55%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    button_style:{
      height:"15%",
      width:"80%",
      backgroundColor:'#FFF',
      borderRadius:45,
      marginTop:"3%",
      alignItems:"center",
      flexDirection:"row"
    },
    button_text:{
      fontSize:17,
      fontWeight:"bold",
      marginLeft:"20%"
    },
    text_logo_style:{
      height:"70%",
      width:"10%",
      marginLeft:"10%"
    }
})
