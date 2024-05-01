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

import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Pengisian Informasi Umum Proyek" component={HomeScreen} />
        <Drawer.Screen name="Tampilan Informasi Umum Proyek" component={HomeScreen} />
        <Drawer.Screen name="Pengisian Laporan Kesiapan Lahan Kerja" component={HomeScreen} />
        <Drawer.Screen name="Tampilan Laporan Kesiapan Lahan Kerja" component={ProyeklistScreen} />
        <Drawer.Screen name="Pengisian Laporan Kuantitas Pekerjaan" component={ProyeklistScreen} />
        <Drawer.Screen name="Tampilan Laporan Kuantitas Pekerjaan" component={ProyeklistScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNav} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Proyeklist" component={DrawerNav} />
        <Stack.Screen name="FormProyek" component={FormProyekScreen} />
        <Stack.Screen name="ProyekDetail" component={ProyekDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
