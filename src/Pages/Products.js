import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Products = ({img, w, h}) => {
  return (
    <TouchableOpacity>
            <View className="ml-2 bg-indigo-700 p-3 rounded-xl shadow">
                <Image
                resizeMode='cover'
                
                source={{
                uri: img,
                width: w,
                height: h,
                }}
                className="ml-2 "
            />
            </View>
    </TouchableOpacity>
  )
}

export default Products