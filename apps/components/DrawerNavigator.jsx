import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React from 'react'
import CountryPage from '../CountryPage';
import HomeScreen from '../HomeScreen';
import AboutScrenn from '../AboutScrenn';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Countries' component={HomeScreen}/>
            <Drawer.Screen name='Country' component={CountryPage}/>
            <Drawer.Screen name='About' component={AboutScrenn}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}