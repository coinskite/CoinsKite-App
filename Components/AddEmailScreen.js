import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width
import LinearGradient from 'react-native-linear-gradient';

export default class AddEmailScreen extends React.Component{  
  
  onPressNext=()=>{
    this.props.navigation.navigate("News")
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.Email_view}>
          <Text style={styles.Email_text}> Add Email </Text>
          <Text style={styles.recovertext1}>To be able to recover or reset your password</Text>
          <Text style={styles.recovertext2}>you''ll need to add your email address.</Text>
          <TextInput style={styles.Email_input} placeholder="Enter Your Email" placeholderTextColor="gray"/>
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
  Email_view:{
    height:Dev_Height-(0.3*Dev_Height),
    width:Dev_Width,
    justifyContent:"center",
  },
  Email_text:{
    color:"#FFF",
    marginLeft:"4%",
    fontSize:25,
    fontWeight:"bold"
  },
  Email_input:{
    height:"10%",
    width:"80%",
    marginLeft:"5%",
    borderBottomColor:"gray",
    borderWidth:1,
    borderColor:"#121212",
    marginTop:10,
    color:"#FFF"
  },
  Button_View:{
    height:Dev_Height-(0.84*Dev_Height),
    width:Dev_Width,
    justifyContent:"flex-end",
    alignItems:"center",
    marginTop:"8%"
    
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
  recovertext1:{
    fontSize:15,
    marginLeft:"5%",
    marginTop:"3%",
    color:"#FFF"
  },
  recovertext2:{
    fontSize:15,
    color:"#FFF",
    marginLeft:"5%",
  },

})