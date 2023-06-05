import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Image } from "react-native";

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const checkTextInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    navigation.navigate("root")
  };


  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
      <SafeAreaView className="bg-gray-300 ">
    <ScrollView>
        <View className="flex items-center bg-gray-300">
          <Image
            source={{
              uri: "https://icons-for-free.com/download-icon-person+profile+user+icon-1320184018411209468_512.png",
              width: 150,
              height: 180,
            }}
          />
        </View>
        <View className="bg-white rounded-t-[50px] mt-5 h-screen">
            <View className="mx-8 my-5">
              <Text className="text-lg font-semibold">Login</Text>
            </View>
            {/* Input Start */}
            <View className="mx-8 my-5">
              <View>
                <TextInput
                  placeholder="Email"
                  className="border-b py-2"
                  onChangeText={
                    (value) => setEmail(value)
                  }
                />
              </View>
              <View>
                <TextInput
                  placeholder="Password"
                  className="border-b mt-4 py-2"
                  secureTextEntry={true}
                  onChangeText={
                    (value) => setPassword(value)
                  }
                />
              </View>
            </View>
            {/* Input end */}
            <TouchableOpacity
              className="flex items-center"
              onPress={checkTextInput}

            >
              <Animatable.View
                animation="pulse"
                easing="ease-in-out"
                iterationCount="infinite"
                className=" bg-blue-600 px-9 py-2 text-white font-semibold rounded-xl shadow-xl"
               
              >
                <Text className="text-white font-semibold">Login</Text>
              </Animatable.View>
            </TouchableOpacity>
            <View className="flex-row justify-between px-5 my-5">
              <TouchableOpacity>
                <Text className="font-semibold">Create account?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="font-semibold">SignUp</Text>
              </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
      </SafeAreaView>
  );
};

export default LoginScreen;
