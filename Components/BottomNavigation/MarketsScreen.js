import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity, 
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import Icon from "react-native-vector-icons/EvilIcons"

export default class MarketsScreen extends React.Component{

  
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  _renderItem=({ item }) => {
    return(
      <View style={styles.Render_View}>
        <Text style={styles.market_cap_Text}>{item["market_data"]["market_cap_rank"]}</Text> 
        <Image resizeMode="contain" source={{uri:item["image"]["small"]}} style={styles.Image}/>
        <View style={styles.name_view}>
          <Text numberOfLines={1} style={{fontSize:17,color:"#FFF"}}>{item["symbol"].toUpperCase()}</Text>
          <Text numberOfLines={1} style={{fontSize:15,color:"#FFF"}}>{item["name"]}</Text>
        </View>

        <View style={styles.price_view}>
          <Text numberOfLines={2} style={{fontSize:13,color:"#FFF"}}>{item["market_data"]["current_price"]["btc"]+" BTC"}</Text>
          <Text  numberOfLines={1} style={{fontSize:14,color:"green"}}>{item["market_data"]["market_cap_change_percentage_24h"]}</Text>
        </View>

        <View style={styles.cap_view}>
          <Text  numberOfLines={1} style={{fontSize:16,color:"#FFF"}}>{item["market_data"]["total_volume"]["btc"]}</Text>
          <Text numberOfLines={1} style={{fontSize:12,color:"gray"}}>{item["market_data"]["market_cap"]["btc"]}</Text>
        </View>

      </View>
    )
  }  

  _Seperator=()=>{
    return(
    <View style={styles.seperator}/>
    )
  }
  render(){

    const { data, isLoading } = this.state;

    return(
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.main_view_serachbox}>
        <View style={styles.search_view}>
            <Icon name="search" size={20} color="#FFF" />
            <TextInput style={styles.search_box} placeholderTextColor="#FFF" placeholder="Search Over 10,000 Coins" inlineImageLeft="./logo_green.png"/>
        </View>
      </View>

      <View style={styles.boxes_3_view}>
        <View style={styles.box1_view}>
          <Text style={styles.text_1}>MARKET CAP</Text>
          <Text style={styles.text_2}>$343.93B</Text>
          <Text style={styles.text_3}>-1.08%</Text>
        </View>

        <View style={styles.box2_view}>
          <Text style={styles.text_1}>24HR VOLUME</Text>
          <Text style={styles.text_2}>$92.66B</Text>
          <Text style={styles.text_3}>+3.27%</Text>
        </View>

        <View style={styles.box3_view}>
          <Text style={styles.text_1}>B DOMINANCE</Text>
          <Text style={styles.text_2}>5.2%</Text>
          <Text style={styles.text_3}>-1.09%</Text>
        </View>
      </View>

      <View style={styles.rank_view}>
        <Text style={styles.rank_text1}>RANK</Text>
        <Text style={styles.rank_text2}>PRICE</Text>
        <Text style={styles.rank_text3}>CAP/VOL</Text>
      </View>

      <View style={styles.FlatList_View}>
        {isLoading ? <ActivityIndicator color="#FFF"/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._Seperator}
          />
        )}
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
    search_view:{
      height:"70%",
      width:"80%",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      backgroundColor:"#333333",
      borderRadius:45,
      marginLeft:"5%",
      marginTop:'5%',
      
    },
    search_box:{
      height:"70%",
      width:"90%",
      paddingHorizontal:20,
      color:"#FFF"
    },
    main_view_serachbox:{
      height:(Dev_Height-(Dev_Height*0.91)),
      width:"100%",
      justifyContent:"center",
    },
    boxes_3_view:{
      height: (Dev_Height-(Dev_Height*0.74)),
      width:"100%",
      flexDirection:"row",
      marginTop:"5%"
    },
    box1_view:{
      height:"80%",
      width:Dev_Width/3,
      borderWidth:1,
      borderColor:"#FFF",
      justifyContent:"center",
      alignItems:"center"
    },
    box2_view:{
      height:"80%",
      width:Dev_Width/3,
      borderWidth:1,
      borderColor:"#FFF",
      borderRightColor:"#121212",
      justifyContent:"center",
      alignItems:"center"

    },
    box3_view:{
      height:"80%",
      width:Dev_Width/3,
      borderWidth:1,
      borderColor:"#FFF",
      justifyContent:"center",
      alignItems:"center",
    },
    text_1:{
      fontSize:12,
      color:"#FFF",
      fontWeight:"bold",
      marginTop:"3%",
      justifyContent:"center",
      width:"90%",
      marginLeft:"20%"
    },
    text_2:{
      fontSize:18,
      color:"#FFF",
      fontWeight:"bold",
      marginTop:"3%",
    },
    text_3:{
      color:"green",
      fontSize:14,
      marginTop:"3%"
    },
    rank_view:{
      height:(Dev_Height-(Dev_Height*0.95)),
      width:"100%",
      flexDirection:"row",
      alignItems:"center"
    },
    rank_text1:{
      fontSize:17,
      color:"gray",
      height:"100%",
      width:"15%",
      marginLeft:"5%"
    },
    rank_text2:{
      fontSize:17,
      color:"gray",
      height:"100%",
      width:"15%",
      marginLeft:"35%"
    },
    rank_text3:{
      fontSize:17,
      color:"gray",
      marginLeft:"5%",
      height:"100%",
      width:"20%",
    },
    FlatList_View:{
      height  : (Dev_Height-(Dev_Height*0.52)),
      width:"100%",
    },
    Render_View:{
      height:(Dev_Height-(Dev_Height*0.90)),
      width:"100%",
      alignItems:"center",
      flexDirection:"row"
    },
    market_cap_Text:{
      marginLeft:"8%",
      fontSize:19,
      color:"#FFF",
      fontWeight:"bold",
    },
    Image:{
      height:"54%",
      width:"10%",
      marginLeft:"4%",
    },
    name_view:{
      height:"100%",
      justifyContent:"center",
      width:"25%",
      marginLeft:"5%",
    },
    price_view:{
      height:"100%",
      justifyContent:"center",
      width:"17%",
      marginLeft:"2%"
    },
    seperator:{
      height:Dev_Height-(Dev_Height*0.98),
      width:"100%"
    },
    cap_view:{
      height:"100%",
      justifyContent:"center",
      width:"17%",
      marginLeft:"2%",
    }

    
})