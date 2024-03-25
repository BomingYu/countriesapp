import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './apps/HomeScreen';
import AboutScrenn from './apps/AboutScrenn';
import CountryPage from './apps/CountryPage';
import DrawerNavigator from './apps/components/DrawerNavigator';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={HomeScreen}/>
        <Stack.Screen name="Country" component={CountryPage} />
        <Stack.Screen name="About" component={AboutScrenn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}