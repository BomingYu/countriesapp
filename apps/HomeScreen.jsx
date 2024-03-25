import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import axios from "axios";
import LoadingComponent from "./components/LoadingComponent";
import { useNavigation } from "@react-navigation/native";
import SortComponent from "./components/SortComponent";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [countriesList, setCountriesList] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const navigation = useNavigation();

  const sortMethods = ["Default", "Name", "Re-Name","Population" , "Re-Population"];

  useEffect(() => {
    const getCountries = async () => {
      const countriesRes = await axios.get(
        "https://api.sampleapis.com/countries/countries"
      );
      const countries = countriesRes.data;
      setCountriesList(countries);
      setSortedList(countries);
      setLoading(false);
    };
    getCountries();
  }, []);

  const handlePress = (id) => {
    console.log("Country: ", id);
    navigation.navigate("Country", { countryId: id });
  };

  const handleOnSelect = (item) => {
    if (item === "Default") {
      sortDefault()
    }
    if (item === "Name") {
      sortByName()
    }
    if (item === "Population") {
      sortByPopulation()
    }
    if (item === "Re-Name") {
      sortByReName()
    }
    if (item === "Re-Population") {
      sortByRePopulation()
    }
  };

  const sortByName = () => {
    const sortedCountries = [...countriesList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;

    });
    setSortedList(sortedCountries)
  };
  const sortByReName = () => {
    const sortedCountries = [...countriesList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;

    });
    setSortedList(sortedCountries)
  };

  const sortByPopulation = () => {
    const sortedCountries = [...countriesList].sort((a,b)=>{
      const populationA = a.population
      const populationB = b.population

      if (populationA < populationB) {
        return -1;
      }
      if (populationA > populationB) {
        return 1;
      }
      return 0;
    })
    setSortedList(sortedCountries)
  }

  const sortByRePopulation = () => {
    const sortedCountries = [...countriesList].sort((a,b)=>{
      const populationA = a.population ||0
      const populationB = b.population ||0

      if (populationA < populationB) {
        return 1;
      }
      if (populationA > populationB) {
        return -1;
      }
      return 0;
    })
    setSortedList(sortedCountries)
  }

  const sortDefault = () => {
    const sortedCountries = [...countriesList]
    setSortedList(sortedCountries)
  }

  return (
    <ImageBackground
      source={require("./../assets/images/cloudbackground.jpeg")}
      className="w-full h-full"
    >
      {!loading && (
        <SortComponent
          data={sortMethods}
          onSelected={(item) => handleOnSelect(item)}
        />
      )}

      <ScrollView>
        <View style={styles.countryContianer} className="mt-2">
          {loading ? (
            <LoadingComponent />
          ) : (
            sortedList.map((country) => (
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
