import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { Button } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/redux";
import EmptyCart from "./EmptyCart";
import Color from "../../Color";

const CartScreen = () => {
  const dispatch = useDispatch();
  const [totalGenetal, setTotatlGenetal] = useState(0);
  const [count, setCount] = useState(0);

  const state = useSelector((state) => state.cart);
  console.log(state);

  useEffect(() => {
    var total = 0;
    const Somme = (qte, price) => {
      total = total + price * qte;
    };

    state.forEach((element) => {
      Somme(element.qte, element.detail.price);
    });

    setTotatlGenetal(total);
  }, [state]);

  return (
    <SafeAreaView>
      <View className="items-center">
        <Text className="text-2xl font-semibold mb-4">MY CART</Text>
      </View>
      {state.length < 1 && (
        <View>
          <EmptyCart />
        </View>
      )}
      <ScrollView>
        {state.length >= 1 && (
          <View>
            <View>
              {state.map((item, index) => (
                <View className="mx-2 my-2 flex-row" key={index}>
                  <Image
                    source={{
                      uri: item.detail.img,
                      width: 110,
                      height: 90,
                    }}
                  />
                  <View className="bg-white w-[280px] rounded-b-xl mx-2 p-2">
                    <Text className="text-lg font-semibold">
                      {item?.detail?.title}
                    </Text>
                    <View className="flex-row my-2">
                      <View className="flex-row  w-20">
                        <View
                          style={{ backgroundColor: Color.primary }}
                          className=" p-2 text-sm rounded-full h-7 justify-center  py-[-60px]"
                        >
                          <Text className=" text-white">
                            {item.qte} x {item.detail.price}$
                          </Text>
                        </View>
                      </View>

                      <View className="mx-24">
                        <Text className="font-bold text-lg">
                          ${item.detail.price * item.qte}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{ backgroundColor: Color.primary }}
                    className="absolute  ml-[365px]  rounded-l-xl p-1"
                    onPress={() => dispatch(deleteCart(item.detail.id))}
                  >
                    <View>
                      <MaterialIcons
                        name="delete-forever"
                        size={25}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <View className="mx-10 bg-white rounded-xl p-3 mt-5">
              <Text className="text-lg text-center my-2">
                {state.length} Element(s) dans le panier
              </Text>
              <View className="flex-row justify-between">
                <Text className="text-lg"> Sous-Total</Text>
                <Text className="text-lg"> ${totalGenetal}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-lg"> Frais livraison</Text>
                <Text className="text-lg"> $3.00</Text>
              </View>
              <View className="flex-row justify-between mb-4">
                <Text className="text-lg font-bold"> Total à payer </Text>
                <Text className="text-lg font-bold"> ${totalGenetal + 3}</Text>
              </View>

              <Button
                title="Payer"
                buttonStyle={{
                  borderRadius: 10,
                  backgroundColor:Color.primary
                }}
              />
              <View></View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
