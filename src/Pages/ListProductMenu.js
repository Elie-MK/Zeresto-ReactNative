import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card } from '@rneui/base'
import LocalDb from '../LocalDb'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

const ListProductMenu = ({position}) => {
  const [db, setDb] = useState([])

  const handleSelect = (title)=>{
    navigation.navigate("productmenu",{title:title} )
  }

  const navigation = useNavigation()
  useEffect(()=>{
    const data = LocalDb.find(data  => data.cat == "menu")
    setDb(data.productsmenu)
  },[])
  return (
    <View className={`items-center ${position? "h-56" :""}  `}>
      <View className="-ml-6 -mr-3  ">




        <FlatList 
        data={db}
        horizontal={position ? true : false}
        keyExtractor={(item)=>item.id}
        numColumns={position ? 1 : 2}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
<TouchableOpacity  className="mt-5 ml-3  items-center " onPress={()=>handleSelect(item.title)}>
                <View className="items-center bg-white p-6 rounded-xl w-full">
                  <View className="mt-2 items-center">
                  <Image
                  source={{
                  uri: item.image,
                  width: position? 50 : 100,
                  height: position? 50 : 90,
                  }}
                  className=""
              />
              <Text className="text-2xl text-center mt-2 font-bold">{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
        )}
        
        />
      </View>
    </View>
  )
}



export default ListProductMenu