

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen.js";
import {AppTabNavigator} from "./components/AppTabNavigator";
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
export default function App() {
  return (
   <View>
   <AppContainer/>
<WelcomeScreen/>
   </View>
  );
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
});
const AppContainer = createAppContainer(switchNavigator)

