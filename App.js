import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { Appearance, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RootNav from "./navigations/RootNav";
import DetailScreen from "./src/Screens/DetailScreen";
import LoginScreen from "./src/Pages/auth/LoginScreen";
import { useEffect } from "react";
import CartScreen from "./src/Screens/CartScreen";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import HomeScreen from "./src/Screens/HomeScreen";
import PizzaDetail from "./src/Screens/Menudetail";
import Menudetail from "./src/Screens/Menudetail";
import ListProductMenu from "./src/Pages/ListProductMenu";
import ProductMenu from "./src/Screens/ProductMenu";

export default function App() {
  const Stack = createStackNavigator();

  //   const apparence = Appearance.getColorScheme()
  // useEffect(()=>{
  // },[])
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS ? 64 : 64}
      >
        <StatusBar style="Dark" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="">
            <Stack.Screen
              name=" "
              component={RootNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="detail"
              component={DetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="menudetail"
              component={Menudetail}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="productmenu"
              component={ProductMenu}
              options={{  }}
            />
            <Stack.Screen name="login" component={LoginScreen} options={{}} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
}
