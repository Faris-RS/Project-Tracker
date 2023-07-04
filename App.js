import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>MERGING BRANCH</Text>
      <Text>Sahad was here</Text>
      <Text>Faris was also here</Text>     
      <Text>Ameen here</Text>
      <Text>Ameen here</Text>
      <Text>Ameen here</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
