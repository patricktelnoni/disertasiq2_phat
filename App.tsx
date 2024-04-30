import "react-native-gesture-handler";
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import HomeScreen from "./screen/HomeScreen.tsx";
import ProfileScreen from "./screen/ProfileScreen.tsx";
import ProyeklistScreen from "./screen/ProyeklistScreen.tsx";
import FormProyekScreen from "./screen/FormProyekScreen.tsx";
import ProyekDetailScreen from "./screen/ProyekDetailScreen.tsx";
import Example from "./component/SideNavigation.tsx";



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Proyeklist" component={ProyeklistScreen} />
        <Stack.Screen name="FormProyek" component={FormProyekScreen} />
        <Stack.Screen name="ProyekDetail" component={ProyekDetailScreen} />
        <Stack.Screen name="SideNavigation" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
