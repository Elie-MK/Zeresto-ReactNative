import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Products from "../Pages/Products";
import HomePlusProducts from "../Pages/HomePlusProducts";
import ListProductMenu from "../Pages/ListProductMenu";
import Color from "../../Color";

const HomeScreen = ({ navigation }) => {

  useLayoutEffect(()=>{
    
    navigation.setOptions({
      headerRight:()=>(
        <TouchableOpacity
              onPress={() => navigation.navigate("profile")}
            >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
                    width: 50,
                    height: 50,
                  }}
                />
            </TouchableOpacity>
      ), 
      headerTitle :()=>(
        <Text style={{color:Color.primary, fontSize:30, fontWeight:"bold"}}>Zeresto</Text>
      ),
      headerTitleAlign:"left"
    });
  },[navigation])

  return (
    <SafeAreaView className="bg-gray-200 flex-1">

      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="px-3 py-3">
             <ListProductMenu position="home"/>


            <View className="-mt-10">
              <Text className="text-2xl my-5 font-bold">Voir plus</Text>
              <View>
                <HomePlusProducts/>
              </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
