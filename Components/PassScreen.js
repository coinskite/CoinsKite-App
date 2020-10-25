import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView, 
  TextInput
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import LinearGradient from 'react-native-linear-gradient';

import Icon from "react-native-vector-icons/AntDesign"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

export default class PassScreen extends React.Component{
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:"Register",
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
      this.props.navigation.navigate("AccountCreated")
    }
  

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.Password_view}>
          <Text style={styles.Password_text}> Password </Text>
          <TextInput style={styles.Password_input} placeholder="*      *       *       *       *       *" placeholderTextColor="gray"/>
          <Text style={styles.Password_availablity}>Minimum 8 Characters</Text>
          <Text style={styles.Password_availablity}>Must contain at least one letter and one number</Text>
          <TouchableOpacity style={{alignItems:"center",flexDirection:"row"}}>
            <Text style={styles.terms__button_text1}>By signing up you're agreeing to the</Text>
            <Text style={styles.terms__button_text2}>Terms Of Service</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.Button_View} onPress={this.onPressNext}>
          <LinearGradient angle={45} colors={['#ADFF2F','#32CD32']} style={styles.Button_Style}>
            <Text style={styles.buttonText}>
              Next
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:Dev_Height,
        width:Dev_Width,
        backgroundColor:"#121212",
    },
    Password_view:{
      height:Dev_Height-(0.3*Dev_Height),
      width:Dev_Width,
      justifyContent:"center",
    },
    Password_text:{
      color:"#FFF",
      marginLeft:"5%",
      fontSize:19,
    },
    Password_input:{
      height:"10%",
      width:"80%",
      marginLeft:"5%",
      borderBottomColor:"gray",
      borderWidth:1,
      borderColor:"#121212",
      marginTop:10,
      marginBottom:"5%",
      color:"#FFF"
    },
    Password_availablity:{
      fontSize:15,
      color:"#32CD32",
      marginTop:"2%",
      marginLeft:"5%"
    },
    Button_View:{
      height:Dev_Height-(0.84*Dev_Height),
      width:Dev_Width,
      justifyContent:"flex-end",
      alignItems:"center",
    },
    Button_Style:{
      height:"45%",
      width:"90%",
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
    terms__button_text1:{
      color:"#FFF",
      marginLeft:"5%",
      fontSize:15,
      marginTop:"2%"
    },
    terms__button_text2:{
      color:"#32CD32",
      marginLeft:"5%",
      fontSize:15,
      marginTop:"2%"
    }

})