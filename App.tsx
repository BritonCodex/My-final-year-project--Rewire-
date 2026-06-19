import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './app/navigators/appNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <AppNavigator/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
