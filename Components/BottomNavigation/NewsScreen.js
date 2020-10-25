import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import {Card} from "react-native-elements"

function truncate(str, no_words) {
  if (str.length <= no_words){
    return str.split(" ").splice(0,no_words).join(" ")+ "..";
  }
  else{
    return str.split(" ").splice(0,no_words).join(" ")
  }
}

export default class NewsScreen extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  

  _renderItem=({ item }) => {
    return(
      <Card  containerStyle={{
        backgroundColor:"#000",
        height:Dev_Height-(Dev_Height*0.8),
        width:Dev_Width-(Dev_Width*0.1),
        borderWidth:0
        }}>
        <View style={{flexDirection:"row",height:"100%",width:"100%",}}>
          <Image source={{uri:item["originalImageUrl"]}} style={{height:"100%",width:"27%",borderRadius:15}}/>
          <View style={{height:"100%",width:"63%"}}>
            <Text style={{color:"#FFF",fontSize:hp('2%'),marginLeft:"10%"}}>{truncate(item["title"],8)}</Text>
            <Text style={{color:"#FFF",fontSize:hp('2%'),marginLeft:"10%",marginTop:"5%"}}>{truncate(item["description"],8)}</Text>
          </View>
        </View>
      </Card>
    )
  }

  componentDidMount() {
    fetch('https://cryptocontrol.io/api/v1/public/news?key=3bf8f6f78e56d2b12519774437dffdae')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  _Seperator=()=>{
    return(
    <View style={styles.seperator}/>
    )
  }

  render(){
    const { data, isLoading } = this.state;

    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content"/>
      <View style={styles.Title_View}>
        <Text style={styles.Title_Text}>News</Text>
      </View>
        {isLoading ? <ActivityIndicator color="#FFF"/> : (
	<View style={{height:"90%",width:"100%"}}>
          <FlatList
            data={data}
            keyExtractor={({ _id }, index) => _id}
            renderItem={this._renderItem}
            horizontal={false}
          />
	</View>
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:Dev_Height,
        width:Dev_Width,
        backgroundColor:"#000"
    },
    FlatList_View:{
      height:(Dev_Height-(Dev_Height*0.20)),
      width:"100%",
    },
    Render_View:{
      height:"10%",
      width:"100%",
      alignItems:"center",
      flexDirection:"row",
    },
    Title_View:{
      height:"10%",
      width:"100%",
      justifyContent:"center"
    },
    Title_Text:{
      fontSize:24,
      color:"#FFF",
      marginLeft:"5%",
      fontWeight:"bold"
    },
    News_Image:{
      height:"80%",
      width:"27%",
      marginLeft:"3%",
      borderRadius:15
    },
    seperator:{
      height:"0.2%",
      width:"100%"
    },

})