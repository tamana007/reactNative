import { useState } from "react";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";

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



export default SearchInput;
