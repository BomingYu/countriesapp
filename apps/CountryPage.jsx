import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import CountryDetail from "./components/CountryDetail";
import LoadingComponent from "./components/LoadingComponent";
import axios from "axios";

export default function CountryPage() {
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const countryId = route.params?.countryId;
  useEffect(() => {
    const getCountry = async () => {
      try {
        const countryRes = await axios.get(
          "https://api.sampleapis.com/countries/countries/" + countryId
        );
        const country = countryRes.data;
        setCountry(country);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };
    getCountry();
  }, []);
  const test = () => {
    console.log(country);
  };
  return (
    <ScrollView>
      <View className="items-center">
        {loading ? (
          <LoadingComponent />
        ) : (
          <CountryDetail
            name={country.name}
            abbr={country.abbreviation}
            capital={country.capital}
            population={country.population}
            currency={country.currency}
            phone={country.phone}
            countryFlag={country.media.flag}
            countryEmblem={country.media.emblem}
            countryOrth={country.media.orthographic}
          />
        )}
      </View>
    </ScrollView>
  );
}
