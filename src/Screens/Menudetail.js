import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView,  } from 'react-navigation'
import LocalDb from '../LocalDb';
import { useNavigation } from '@react-navigation/native';

const Menudetail = () => {
  const navigation = useNavigation();

  const [db, setDb] = useState([]);

  useEffect(() => {
    const data = LocalDb.find((data) => data.cat == "products");
    setDb(data.product);
  }, []);
  return (
<SafeAreaView>
  <View className="items-center my-4">
    <Text className="text-5xl font-bold">Pizza</Text>
  </View>
<View>
  <ScrollView>
      {db.map((data, id) => (
        <TouchableOpacity onPress={() => navigation.navigate("detail",{param:data})} key={id}>
          <View className="  my-2 p-3 rounded-xl shadow">
            <Image
              source={{
                uri: data.image,
                width: 600,
                height: 200,
              }}
              className="flex-row items-center justify-center "
            />
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
  </ScrollView>
    </View>
</SafeAreaView>
  )
}

export default Menudetail