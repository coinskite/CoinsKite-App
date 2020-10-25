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



export default class TermsScreen extends React.Component{

  onPressIcon=()=>{
    this.props.navigation.navigate("Setting")
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back_view} onPress={this.onPressIcon}>
        <Icon name="left" color="#FFF" size={24} style={styles.back_icon}/>
      </TouchableOpacity>

        <View style={styles.logo_view}>
            <Image source={require("../logo_green.png")} style={styles.logo_style}/>
        </View> 

        <View style={styles.text_view }>
          <Text style={styles.text_style}> Terms And Condition's</Text>
        </View>

        <ScrollView style={styles.terms_view} >
          <Text style={styles.terms_style}> {`Hi We Are Coins Kite \n This is The Demo Version Of The App \n Plese Chage The Othe Functions To The Others \n These Are some sample text \n \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhgTetxt fsdghvbnhgnbmhfhbdnm \n gtysdghvbhfgvsdbx \n hrtfsvbgtyrfbcvbg \n tdgsbxhytrfvhg` } </Text>
        </ScrollView>

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
      height:"30%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    logo_style:{
      height:"65%",
      width:"27%"
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
    terms_view:{
      height:"50%",
      width:"100%",
    },
    terms_style:{
      color:"#FFF",
      fontSize:15,
      textAlign:"center"
    }

})
