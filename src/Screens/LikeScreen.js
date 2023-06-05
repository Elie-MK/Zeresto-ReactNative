import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { deleteCart, deleteLike } from "../../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const LikeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.like)



  return (
    <SafeAreaView>
      <View className="items-center mt-4">
        <Text className="text-2xl font-semibold">MY FAVORIS</Text>
      </View>
      {state.length < 1 && (
        <View className="mt-4 items-center">
          <EmptyCart/>
        </View>
      )}

      <View>
      {
        state.length >=1 && (
        <ScrollView>
        {state.map((item, index) => (
        <View className="mx-2 my-2 flex-row" key={index}>
          <Image
            source={{
              uri: item?.detail?.img,
              width: 110,
              height: 90,
            }}
          />
          <View className="bg-white w-[280px] rounded-b-xl mx-2 p-2">
            <View className="flex-row">
              <View className="">
                <Text className=" font-semibold text-2xl">{item?.detail?.title}</Text>
                <Text className="font-bold text-2xl">${item?.detail?.price}</Text>
              </View>
              <TouchableOpacity onPress={()=>dispatch(deleteLike(item?.detail?.id))} className="ml-52 mt-5 absolute">
                  <FontAwesome name="heart" size={35} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        ))}
      </ScrollView>
        )
      }
      </View>
     
    </SafeAreaView>
  );
};

export default LikeScreen;
