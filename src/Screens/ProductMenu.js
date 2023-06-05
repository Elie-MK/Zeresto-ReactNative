import { View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LocalDb from '../LocalDb';
import { Divider } from '@rneui/base';
import { useLayoutEffect } from 'react';
import Color from '../../Color';

const ProductMenu = ({data, navigation, route:{params:{title}}}) => {

  const [db, setDb] = useState([]);

  useEffect(() => {
    const data = LocalDb.find((data) => (data.catnom == title.toLowerCase()));
    setDb(data.products)
  }, [title]);

  useLayoutEffect(()=>{
    
    navigation.setOptions({
      headerTitle :()=>(
        <Text style={{color:Color.primary, fontSize:30, fontWeight:"bold"}}>{title}</Text>
      ),
      headerTitleAlign:"center"
    });
  },[navigation])

  
  return (
    <SafeAreaView>
        <View>
      {db.map((data, id) => (
        <TouchableOpacity onPress={() => navigation.navigate("detail",{param:data})} key={id} className="">
          <View className="  my-2 p-3 rounded-lg shadow bg-white mb-3 mx-4 ">
            <Image
              resizeMode="contain"
              source={{
                uri: data.image,
                width: "100%",
                height: 200,
              }}
              className="flex-row items-center justify-center "
            />
            <Divider/>
            <View className="flex-row  justify-between my-2">
              <Text className="mx-5 text-2xl font-bold">{data.title}</Text>
              <Text className="mx-5 text-2xl font-bold">{data.price}$</Text>
            </View>

            <View className="flex-row  justify-between">
              <Text className="mx-5 ">{data.subdesc}</Text>
              <Text className="mx-5">{data.start}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    </SafeAreaView>
  )
}

export default ProductMenu