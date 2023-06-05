import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "@rneui/base";
import Color from "../../Color";
import LocalDb from "../LocalDb";
import { useLayoutEffect } from "react";

const Profile = ({navigation}) => {
    const [catProfile, setCatProfile] = useState([])

    useEffect(()=>{
        const data = LocalDb.find(data => data.catnom == "profile")
        setCatProfile(data.products);
    })

    useLayoutEffect(()=>{
    
      navigation.setOptions({
        headerTitle :()=>(
          <Text style={{color:Color.primary, fontSize:20, fontWeight:"bold"}}>Profile</Text>
        ),
        headerTitleAlign:"center"
      });
    },[navigation])
  return (
    <SafeAreaView className="bg-gray-200 h-screen">
      <View className="items-center bg-white my-2 mx-2 rounded-xl p-2">
        <MaterialIcons name="account-circle" size={90} color={Color.primary} />
        <View className=" flex-row ">
          <Text className="text-2xl mr-2 font-bold text-center">
            Elie Mulumba
          </Text>
        </View>
        <Text>elie.mk@gmail.com</Text>
        <View className="my-2">
          <Button
            title="Edit Profile"
            buttonStyle={{
              backgroundColor: Color.primary,
              borderRadius: 30,
              padding: 10,
              width: 170,
            }}
          />
        </View>
      </View>
      <View className="mx-2 my-5">
        {
            catProfile.map(({icon, title, navigation, id})=>(
                <TouchableOpacity className={`flex-row items-center ${catProfile ? "my-2" : ""} justify-between p-2 bg-white rounded-xl`} key={id}>
                    <View className="flex-row items-center">
                  <MaterialIcons
                    name={icon}
                    size={40}
                    style={{
                      color: Color.primary,
                      padding:3, 
                      borderRadius:15
                    }}
                  />
                  <Text className="text-2xl ml-2">{title}</Text>
                    </View>
                  <MaterialIcons name="arrow-forward-ios" />
                </TouchableOpacity>
            ))
        }
      </View>

      <View className="items-center ">
      <Button
            title="Logout"
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 30,
              padding: 10,
              width: 170,
            }}
          />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
