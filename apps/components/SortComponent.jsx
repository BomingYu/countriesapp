import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

export default function SortComponent({ data , onSelected}) {
  const sortMethods = ["Default", "Name", "Population"];

  return (
    <View className="flex flex-row items-center m-2">
      <Text>Sort By: </Text>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem) => onSelected(selectedItem)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    borderRadius: 40,
  },
});
