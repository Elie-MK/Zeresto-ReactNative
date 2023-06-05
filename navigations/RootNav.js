import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Entypo  from 'react-native-vector-icons/Entypo';
import  Feather from 'react-native-vector-icons/Feather';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../src/Screens/HomeScreen';
import CartScreen from '../src/Screens/CartScreen';
import MenuScreen from '../src/Screens/MenuScreen';
import LikeScreen from '../src/Screens/LikeScreen';
import ProfileScreen from '../src/Screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import Color from '../Color';
import Profile from '../src/profileScreens/Profile';



const RootNav = () => {
 
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    
    screenOptions={{
      tabBarActiveTintColor:Color.primary,
      tabBarHideOnKeyboard:true,
        tabBarStyle : {padding: 6, justifyContent:"center", alignItems:"center"},
        
      }}>
      <Tab.Screen name="home" component={HomeScreen}  options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={30} />
          ), 
          
        }}/> 
        
        <Tab.Screen name="cart" component={CartScreen}  options={{
            tabBarLabel: '',
            headerShown:false,
            tabBarIcon: ({color}) => (
              <Entypo name="shopping-cart" color={color} size={30} />
            ),
          }}/> 
      <Tab.Screen name="menu" component={MenuScreen}  options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Feather name="layers" color={color} size={30} />
          ),
        }}/> 
      <Tab.Screen name="like" component={LikeScreen}  options={{
          tabBarLabel: '',
          headerShown:false,
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" color={color} size={30}  />
          ),
        }}/> 
      <Tab.Screen name="profile" component={Profile}  options={{
          tabBarLabel: '',
          // tabBarStyle: { display: 'none' },
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={30} />
          ),
        }}/> 


    </Tab.Navigator>
  )
}

export default RootNav