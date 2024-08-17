
import React from "react";
import { StyleSheet,View,Text } from "react-native";

 const SearchInput=()=>{

  return(
    <View style={styles.searchInput}>
      <Text style={styles.searchText}>Search goes here</Text>
    </View>
  )

 

  }



  const styles=StyleSheet.create({

    searchInput: {
      display: 'flex',
      flexDirection: 'row',
      // flex:0.5,
      // justifyContent: 'center',
      color: 'red',
      backgroundColor: 'darkgreen',
      padding:16
    },
    
    searchText:{
      color: 'blue'
    }
  })

  export default SearchInput;