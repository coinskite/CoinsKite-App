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
  TouchableOpacity,
  Switch
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import Icon from "react-native-vector-icons/Ionicons"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon8 from "react-native-vector-icons/MaterialIcons"

export default class SettingsScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      notification_switch : false,
      night_switch : false
    }
  }

  onPressHelp=()=>{
    this.props.navigation.navigate("Help")
  }

  onPressTerms=()=>{
    this.props.navigation.navigate("Terms")
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
      <View style={styles.text_view}>
        <Text style={styles.text_text}>Settings</Text> 
      </View>
        <View style={styles.Main_View}>
          <Icon name="notifications" color="#FFF" size={28} style={styles.icon}/>
          <Text style={styles.text}> Notification </Text>
          <Switch   value={this.state.notification_switch} style={styles.switch} onValueChange={()=>this.setState({ notification_switch : true})}></Switch>
        </View>

        <View style={styles.Main_View}>
          <Icons name="weather-night" color="#FFF" size={28} style={styles.icon}/>
          <Text style={styles.text}> Night Mode </Text>
          <Switch    value={this.state.night_switch} style={styles.switch} onValueChange={()=>this.setState({ night_switch : true})}></Switch>
        </View>

        <View style={styles.Main_View}>
          <Icon name="star" color="#FFF" size={28} style={styles.icon}/>
          <Text style={styles.text}> Rate And Review </Text>
        </View>

        <TouchableOpacity style={styles.Main_View} onPress={this.onPressTerms}>
          <Icon name="checkmark" color="#FFF" size={28} style={styles.icon}/>
          <Text style={styles.text}> Terms And Conditions </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Main_View} onPress={this.onPressHelp}>
          <Icon8 name="support-agent" color="#FFF" size={28} style={styles.icon}/>
          <Text style={styles.text}> Help And Support </Text>
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
    
    text_view:{
      height:"25%",
      width:"100%",
      justifyContent:"center"
    },
    text_text:{
      fontSize:24,
      color:"#FFF",
      marginLeft:"40%",
      fontWeight:"bold"
    },
    Main_View:{
      height:"10%",
      width:"100%",
      flexDirection:"row",
      alignItems:"center",
    },
    icon:{
      marginLeft:"10%"
    },
    text:{
      fontSize:14,
      color:"#FFF",
      marginLeft:"10%",
      height:"30%",
      width:"60%"
    },
})
