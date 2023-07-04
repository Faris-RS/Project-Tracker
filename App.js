import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Faris was not here</Text>
      <Text>Munshid was not here</Text>
      <Text>Athul was not here</Text>
      <Text>Ameen was not here</Text>
      <Text>Sahad was not here</Text>
      <Text>Rishad was not here</Text>
      <Text>Shijin was not here</Text>
      <Text>Hrithik was not here</Text>
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
