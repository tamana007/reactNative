import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import SearchInput from "./src/components/SearchInput";
import RestuarantInfoCard from "./src/components/RestuarantInfoCard";
import styled from "styled-components/native";

export default function App() {
  console.log("statusbar height goes here", StatusBar.currentHeight);

const SafeAreaViewContiner=styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar.currentHeight};

`;
const ViewContainer=styled(View)`
    display: "flex";
    flex-direction: "row";

`
;
  return (
    <>
      <SafeAreaViewContiner>
        <View >
          <SearchInput />
        </View>
        <RestuarantInfoCard />
      </SafeAreaViewContiner>
      <ExpoStatusBar />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //Instead of this....
//     // paddingTop: Platform.OS=='android' ?20:0
//     //use this:
//     marginTop: StatusBar.currentHeight,
//   },
//   searchInput: {
//     display: "flex",
//     flexDirection: "row",

//     padding: 25,
//   },
// });
