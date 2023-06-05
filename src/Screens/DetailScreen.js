import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Products from "../Pages/Products";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch, useSelector } from "react-redux";
import { addCart, addLike, deleteCart, deleteLike, supCart } from "../../redux/redux";
import { Badge } from '@rneui/themed';
import Color from "../../Color";



const DetailScreen = ({route}) => {
const dispatch = useDispatch();

const state = useSelector((state)=>state.cart)
const likestate = useSelector((state)=>state.like)



  const data = route?.params?.param;
  const {id}=data;
  // console.log("data",data);

  // const st = state.find(data=>console.log(  data.detail.id == id));

  const [like, setLike] = useState( likestate.find(data=>(  data.detail.id == id)) ? true : false);
  const navigation = useNavigation();
  const [count, setCount] = useState(0)

  const Handlebutton = (detail)=> { 
    if(count <= 0){
        return;
    }
    setCount(count - 1)
    dispatch(supCart(detail))
} 
const HandleButtonPlus = (detail) => {
    if(count>=20){
        return;
    }
    setCount(count + 1)
    dispatch(addCart(detail))
} 

const likes = ()=>{
    like ? dispatch(deleteLike(id)) : dispatch(addLike({qte:1,detail:{img:data.image,title:data.title,price:data.price,id:data.id}}))
  setLike(!like)
}

  return (
    <SafeAreaView>
      <View className="px-8 flex-row  justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="long-arrow-left" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={likes}>
          {!like ? (
            <FontAwesome name="heart-o" size={25} />
          ) : (
            <FontAwesome name="heart" size={25} />
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-10">
        <View className="flex-1 items-center">
          <Image
          resizeMode="contain"
            source={{
              uri: data?.image,
              width: "100%",
              height: 165,
            }}
            className=""
          />
        </View>
        <Text className="mt-48 px-5 text-2xl">{data?.title}</Text>
        <View className="flex-row">
          <View className="flex-row px-5 my-2 ">
            <FontAwesome name="star" color={"#FFBF00"} size={15} />
            <FontAwesome name="star" color={"#FFBF00"} size={15} />
            <FontAwesome name="star" color={"#FFBF00"} size={15} />
            <FontAwesome name="star" color={"#FFBF00"} size={15} />
            <FontAwesome name="star" color={"grey"} size={15} />
          </View>
          <Text className="text-lg text-gray-400">4.6(490)</Text>
        </View>
        <View className="flex-row px-5 justify-between">
          <Text className="text-2xl font-bold">${data?.price}</Text>
          <View className="flex-row">
            <TouchableOpacity onPress={()=>Handlebutton({qte:1,detail:{img:data.image,title:data.title,price:data.price,id:data.id}})}>
              <Text style={{backgroundColor:Color.primary}} className=" p-2 text-2xl text-white py-[-60px]">
                -
              </Text>
            </TouchableOpacity>
            <Text className="p-1 text-lg mx-2">{count}</Text>
            <TouchableOpacity onPress={()=>HandleButtonPlus({qte:1,detail:{img:data.image,title:data.title,price:data.price,id:data.id}})}>
              <Text style={{backgroundColor:Color.primary}} className=" p-2 text-2xl text-white py-[-60px]">
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="px-5 my-5 text-justify">
          {data?.desc}
        </Text>
        <View className="px-5 flex-row items-center justify-between">
          <TouchableOpacity style={{backgroundColor:Color.primary}} className={`p-3 rounded-xl w-48 font-bold text-white text-md`} onPress={()=>dispatch(addCart({qte:1,detail:{img:data.image,title:data.title,price:data.price,id:data.id}}))}>
            <Text className="rounded-lg  font-bold text-white text-lg text-center">
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate("cart")}>
            <Ionicons name="cart" size={60} color={Color.primary}  />
            <Badge status="primary"
            value={state.length} containerStyle={{ position: 'absolute', top: 5, left: 40 }}/>
            
          </TouchableOpacity>
        </View>


        
        <View>
          <Text className="px-5 py-4 text-lg font-bold">Most popular food</Text>
        </View>
        <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Products
                img="https://gps.burgerkingencasa.es/images/products/1661165652603_Menu-Big-King-vaso-new.png"
                h={70}
                w={100}
              />
              <Products
                img="https://burgerkingfrance.twic.pics/img/products/d/68/d688560e-85c3-4162-bda7-4e3d1c475a1b_?twic=v1/contain=700x700"
                h={70}
                w={100}
              />
              <Products
                img="https://png.pngtree.com/png-clipart/20230422/original/pngtree-spaghetti-delicious-lunch-png-image_9075871.png"
                h={70}
                w={100}
              />
              <Products
                img="https://www.legyros.fr/produit/2744_229.png"
                h={70}
                w={120}
              />
              <Products
                img="https://mimifood.fr/produit/2219_206.png"
                h={70}
                w={120}
              />
              <Products
                img="https://kfc.com.tn/56473-home_default/frites.jpg"
                h={70}
                w={100}
              />
              <Products
                img="https://www.pngplay.com/wp-content/uploads/9/KFC-Chicken-Transparent-File.png"
                h={70}
                w={50}
              />
            </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
