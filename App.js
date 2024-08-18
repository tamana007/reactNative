import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import SearchInput from "./src/components/SearchInput";
import RestuarantInfoCard from "./src/components/RestuarantInfoCard";

export default function App() {
  console.log("statusbar height goes here", StatusBar.currentHeight);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.SearchInput}>
          <SearchInput />
        </View>
        <RestuarantInfoCard />
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //Instead of this....
    // paddingTop: Platform.OS=='android' ?20:0
    //use this:
    marginTop: StatusBar.currentHeight,
  },
  searchInput: {
    display: "flex",
    flexDirection: "row",

    padding: 25,
  },
});
