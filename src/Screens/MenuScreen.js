import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import ListProductMenu from "../Pages/ListProductMenu";
import { useLayoutEffect } from "react";

const MenuScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="">
          <Text className="text-4xl text-center font-bold">Menu</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1">
      <ListProductMenu />
    </SafeAreaView>
  );
};

export default MenuScreen;
