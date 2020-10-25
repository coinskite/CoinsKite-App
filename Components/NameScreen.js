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

export default class NameScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username_availablity: "Available"
    }
  }
  
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
      this.props.navigation.navigate("Password")
    }
  

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.username_view}>
          <Text style={styles.username_text}> Username </Text>
          <TextInput style={styles.username_input} placeholder="Name" placeholderTextColor="gray"/>
          <Text style={styles.username_availablity}>{this.state.username_availablity}</Text>
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
    username_view:{
      height:Dev_Height-(0.3*Dev_Height),
      width:Dev_Width,
      justifyContent:"center",
    },
    username_text:{
      color:"#32CD32",
      marginLeft:"5%",
      fontSize:19,
    },
    username_input:{
      height:"10%",
      width:"80%",
      marginLeft:"5%",
      borderBottomColor:"gray",
      borderWidth:1,
      borderColor:"#121212",
      marginTop:10,
      color:"#FFF"
    },
    username_availablity:{
      fontSize:17,
      color:"#32CD32",
      marginTop:"4%",
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

})