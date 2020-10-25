import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet, 
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import LinearGradient from 'react-native-linear-gradient';
import Icons from "react-native-vector-icons/AntDesign"

export default class LoginScreen extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:"Login",
      headerRight:()=>{
        return(
          <Icons name="close" size={30} color="#FFF" style={{marginRight:(Dev_Width-(0.96*Dev_Width))}} onPress={()=>{
              navigation.navigate("Head")
          }}/>
        )
        },
        headerStyle: { backgroundColor: '#121212' },
      headerTitleStyle:{color:"#FFF"},
      headerTintColor: 'white',
      }};

      onPressSignUp=()=>{
        this.props.navigation.navigate("Head")
      }

      onPressContinue=()=>{
        this.props.navigation.navigate("News")
      }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
        <View style={styles.form_view}>
          <View style={styles.form_view_email}>
            <Icons name="mail" size={19} color="#FFF"/>
            <TextInput style={styles.email} placeholder="Email" placeholderTextColor="#FFF"/>
          </View> 
          <View style={styles.form_view_passwd}>
            <Icons name="lock" size={19} color="#FFF"/>
            <TextInput style={styles.passwd} placeholder="*    *    *    *    *" placeholderTextColor="#FFF"/>
          </View> 
        </View>

        <View style={styles.Buttons_View}>
        <TouchableOpacity style={styles.Button_View} onPress={this.onPressContinue}>
          <LinearGradient angle={45} colors={['#ADFF2F','#32CD32']} style={styles.Button_Style}>
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.Dont_have_acc_text}> Don't Have An Account ?</Text>
        <TouchableOpacity style={styles.container_signup} onPress={this.onPressSignUp}>
          <Text style={styles.signup_text}>Sign Up </Text>
        </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
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
    form_view:{
      height:Dev_Height-(0.37*Dev_Height),
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
    },
    form_view_email:{
      height:"20%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    },
    form_view_passwd:{
      height:"20%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      marginTop:"3%",
    },
    email:{
      height:"60%",
      width:"80%",
      paddingHorizontal:20,
      borderBottomColor:"#FFF",
      borderWidth: 1
    },
    passwd:{
      height:"60%",
      width:"80%",
      paddingHorizontal:20,
      borderBottomColor:"#FFF",
      borderWidth: 1
    },
    Buttons_View:{
      height:Dev_Height-(0.73*Dev_Height),
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
    },
    Button_View:{
      height:"25%",
      width:Dev_Width,
      alignItems:"center"    
    },
    Button_Style:{
      height:"100%",
      width:"40%",
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center"
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: '#ffffff'
    },
    Dont_have_acc_text:{
      color:"#FFF",
      marginTop:"4%"
    },
    container_signup:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    signup_text:{
      color:"#32CD32",
      fontSize:17,
      marginTop:"4%"
    }
})