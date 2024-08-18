import { useState } from "react";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    display: "flex",
    flexDirection: "row",
    // flex:0.5,
    // justifyContent: 'center',
    color: "red",
    backgroundColor: "darkgreen",
    padding: 16,
  },

  searchText: {
    color: "blue",
  },
});

export default SearchInput;
