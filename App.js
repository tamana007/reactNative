import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Platform,StatusBar} from 'react-native';
import  SearchInput  from './src/components/SearchInput'
import  ListItem  from './src/components/ListItem'



export default function App() {
  console.log('statusbar height goes here',StatusBar.currentHeight );
  
  return (
    <>
    <SafeAreaView style={styles.container}>
      <Text >seach:</Text>

      <SearchInput/>
      <ListItem/>



    </SafeAreaView>
    <ExpoStatusBar/> 

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //Instead of this....
    // paddingTop: Platform.OS=='android' ?20:0
    //use this:
    marginTop:StatusBar.currentHeight ,

  },

});
