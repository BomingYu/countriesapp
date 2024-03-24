import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function CountryDetail({name, abbr, capital, population, currency, phone, countryFlag , countryEmblem , countryOrth}) {

    const flageImage = countryFlag ? {uri:countryFlag} : require('./../../assets/images/no-image.png')
    const emblemImage = countryEmblem ? {uri:countryEmblem} : require('./../../assets/images/no-image.png')
    const orthImage = countryOrth ? {uri:countryOrth} : require('./../../assets/images/no-image.png')
  return (
    <View className="items-start">
      <View className="gap-2">
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Name:</Text>
          <Text className="text-base font-bold">{name}</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Abbr.:</Text>
          <Text className="text-base font-bold">{abbr}</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Capital:</Text>
          <Text className="text-base font-bold">{capital}</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Population:</Text>
          <Text className="text-base font-bold">{population}</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Currency:</Text>
          <Text className="text-base font-bold">{currency}</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          <Text className="text-base">Phone:</Text>
          <Text className="text-base font-bold">{phone}</Text>
        </View>
      </View>
      <View className="items-start gap-5 mx-1 mt-2">
        <View>
          <Text className="text-base">Flag: </Text>
          <Image
            source={flageImage}
            className="w-80 h-48 object-cover mt-2"
          />
        </View>
        <View>
          <Text className="text-base">Emblem: </Text>
          <Image
            source={emblemImage}
            className="w-64 h-64 object-cover mt-2"
          />
        </View>
        <View>
          <Text className="text-base">Orthographic: </Text>
          <Image
            source={orthImage}
            className="w-64 h-64 object-cover mt-2"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "auto",
  },
});
