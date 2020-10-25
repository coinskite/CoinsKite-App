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

import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign"

export default class AccCreated extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:"",
      headerRight:()=>{
        return(
          <Icon name="close" size={30} color="#FFF" style={{marginRight:(Dev_Width-(0.96*Dev_Width))}} onPress={()=>{
              navigation.navigate("Head")
          }}/>
        )
        },
        headerStyle: { backgroundColor: '#121212' },
      headerTitleStyle:{color:"#FFF"},
      headerTintColor: 'white',
      }};

      onPressNext=()=>{
        this.props.navigation.navigate("Email")
      }

      onPressSkip=()=>{
        this.props.navigation.navigate("News")
      }
  render(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
        <View style={styles.sucess_image_view}>
            <Image source={require("../assets/created.png")} style={styles.sucess_image_style}/>
        </View> 
        <View style={styles.accountcreated_view}>
          <Text style={styles.accountcreated_text}>Account Created !</Text> 
          <Text style={styles.recovertext1}>To be able to recover or reset your password</Text>
          <Text style={styles.recovertext2}>you''ll need to add your email address.</Text>
        </View>

        <TouchableOpacity style={styles.Button_View1} onPress={this.onPressNext}>
          <LinearGradient angle={45} colors={['#ADFF2F','#32CD32']} style={styles.Button_Style1}>
            <Text style={styles.buttonText1}>
              Add Email
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.Button_View2}>
          <TouchableOpacity style={styles.Button_Style2} onPress={this.onPressSkip}>
            <Text style={styles.buttonText2}>
              Skip
            </Text>
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
    sucess_image_view:{
      height:"40%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"5%"
    },
    sucess_image_style:{
      height:"100%",
      width:"100%"
    },
    accountcreated_view:{
      height:"15%",
      width:"100%",
      marginTop:"10%"
    },
    accountcreated_text:{
      fontSize:24,
      color:"#FFF",
      marginLeft:"10%"
    },
    recovertext1:{
      fontSize:15,
      marginLeft:"10%",
      marginTop:"3%",
      color:"#FFF"
    },
    recovertext2:{
      fontSize:15,
      color:"#FFF",
      marginLeft:"10%",
    },
    Button_View1:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"15%"
    },
    Button_Style1:{
      height:"80%",
      width:"80%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:45
    },
    buttonText1:{
      fontSize:18,
      color:"#FFF"
    },
    Button_View2:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    Button_Style2:{
      height:"80%",
      width:"80%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:45,
      borderWidth:1,
      borderColor:"#FFF"
    },
    buttonText2:{
      fontSize:18,
      color:"#FFF"
    }
})