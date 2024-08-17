import React from "react";
import {StyleSheet,View,Text} from "react-native"

const ListItem=()=>{

  return (
    // <View style={styles.list}><Text>List Items goes here</Text></View>
    <View style={styles.list}>
    <Text style={styles.listText}>Search goes hereedee</Text>
  </View>
  )
}

const styles = StyleSheet.create({

  list:{
    backgroundColor: 'red',
    padding:16,
    flex:1,
    height:'100%'
  },
  listText: {
    color: 'yellow',
  }
})

export default ListItem;