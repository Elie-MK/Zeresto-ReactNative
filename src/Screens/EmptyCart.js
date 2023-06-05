import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import Color from "../../Color";

export default function EmptyCart() {
    const navigation = useNavigation()
  return (
    <View>
      <View className="items-center">
        <Image
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png",
            width: 350,
            height: 400,
          }}
        />
        <Text className="text-xl font-semibold">Your cart is empty </Text>
        <Button title="Go Home " buttonStyle={{borderRadius:10, marginTop:20, backgroundColor:Color.primary }} onPress={()=>navigation.navigate('home')}/>
      </View>
    </View>
  );
}
