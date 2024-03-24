import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import axios from "axios";
import LoadingComponent from "./components/LoadingComponent";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [countriesList, setCountriesList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getCountries = async () => {
      const countriesRes = await axios.get(
        "https://api.sampleapis.com/countries/countries"
      );
      const countries = countriesRes.data;
      setCountriesList(countries);
      setLoading(false);
    };
    getCountries();
  }, []);
  const handlePress = (id) => {
    console.log("Country: ", id);
    navigation.navigate("Country" , {countryId:id});
  };
  return (
    <ImageBackground
      source={require("./../assets/images/cloudbackground.jpeg")}
      className="w-full h-full"
    >
      <ScrollView>
        <View style={styles.countryContianer} className="mt-2">
          {loading ? (
            <LoadingComponent />
          ) : (
            countriesList.map((country) => (
              <CountryCard
                key={country.id}
                countryId={country.id}
                countryName={country.name}
                countryFlag={country.media.flag}
                onCountryPress={() => handlePress(country.id)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  countryContianer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
