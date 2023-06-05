import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Image } from "react-native";
import { Avatar } from "@rneui/themed";
import { Input } from "@rneui/themed";
import { Button, ButtonGroup, withTheme, Text } from "@rneui/themed";

const ProfileScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <SafeAreaView className="bg-blue-400">
      <ScrollView>
        <View className="bg-white h-full mt-60 rounded-t-3xl">
          <View className="flex-1 items-center -mt-[70px]">
            <Avatar
              size={120}
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/women/57.jpg",
              }}
              title="Bj"
              containerStyle={{ backgroundColor: "grey" }}
            >
              <Avatar.Accessory size={33} />
            </Avatar>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Number" />
            <Button
              title="Changer mot de passe"
              buttonStyle={{
                backgroundColor: "black",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
                padding: 20,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: "bold" }}
            />
            <Button
              title="Deconnectez"
              buttonStyle={{
                backgroundColor: "red",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
                padding: 20,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: "bold" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
