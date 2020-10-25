import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from "react-navigation-tabs"
import {Dimensions} from "react-native"

import AccCreated from "./Components/AccCreated";
import AddEmailScreen from "./Components/AddEmailScreen";
import HeadScreen from "./Components/HeadScreen";
import NameScreen from "./Components/NameScreen";
import PassScreen from "./Components/PassScreen";
import SplashScreen from "./Components/SplashScreen";

import MarketsScreen from "./Components/BottomNavigation/MarketsScreen"
import NewsScreen from "./Components/BottomNavigation/NewsScreen"
import SavedScreen from "./Components/BottomNavigation/SavedScreen"
import SettingsScreen from "./Components/BottomNavigation/SettingsScreen"

import HelpScreen from "./Components/Secure/HelpScreen"
import LoginScreen  from "./Components/Secure/LoginScreen"
import TermsScreen from "./Components/Secure/TermsScreen"

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

import Icon from "react-native-vector-icons/AntDesign"
import Icons from "react-native-vector-icons/MaterialIcons"

const AppTabNavigator = createBottomTabNavigator(
  {
    News:{
      screen: NewsScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Icon name="profile" size={24} color={tintColor}/>
      }
    },
    Saved:{
      screen: SavedScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Icons name="bookmark" size={24} color={tintColor}/>
      }
    },
    Market:{
      screen: MarketsScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Icons name="bar-chart" size={24} color={tintColor}/>
      }
    },
    
    Setting:{
      screen: SettingsScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Icon name="setting" size={24} color={tintColor}/>
      }
    },
  },
  {
    tabBarOptions:{
      activeBackgroundColor:"#121212",
      inactiveBackgroundColor:"#121212",
      activeTintColor:"#FFF",
      inactiveTintColor:"gray",
      style:{
        borderColor:"#121212",
        borderTopColor:"#121212"
      }
    }
  }
)
const AppNavigator = createStackNavigator({
  
  Splash:{
    screen: SplashScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Head:{
    screen: HeadScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Name:{
    screen: NameScreen,
  },
  Password:{
    screen:PassScreen,
  },
  AccountCreated:{
    screen:AccCreated
  },
  Email:{
    screen:AddEmailScreen,
    navigationOptions:{
      headerShown:false
    },
  },
  Login:{
    screen:LoginScreen
  },
  Help:{
    screen:HelpScreen,
    navigationOptions:{
      headerShown:false
    },
  },
  Terms:{
    screen:TermsScreen,
    navigationOptions:{
      headerShown:false
    },
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AppNavigator,
      App : AppTabNavigator
    },
    {
      initialRouteName:"Auth"
    }
  )
);

