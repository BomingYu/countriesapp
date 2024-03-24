import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CountryCard({ countryId, countryName, countryFlag, onCountryPress}) {
  const handleOnPress = (id) => {
    onCountryPress(id)
  };

  const defaultImageSource = require("./../../assets/images/no-image.png")
  const [source , setSouce] = useState(countryFlag?{uri: countryFlag}:defaultImageSource)
//   const imageSource = countryFlag
//     ? { uri: countryFlag }
//     : require("./../../assets/images/no-image.png");

  const handleErrorImg = () => {
    setSouce(defaultImageSource)
  }

  return (
    <TouchableOpacity onPress={()=>handleOnPress(countryId)}>
      <View
        className="flex items-center w-48 h-48 bg-white justify-center rounded-2xl"
        style={styles.contianer}
      >
        <Text className="text-lg mb-1">{countryName}</Text>
        <Image
          style={styles.image}
          source={source}
          className="w-32 h-32"
          onError={handleErrorImg}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  image: {
    borderRadius: 30,
  },
});
