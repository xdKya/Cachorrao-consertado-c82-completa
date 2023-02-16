import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/profile";
import BottomTabNavigator from "./bottomTab";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tela Inicial" component={BottomTabNavigator} />                  
      <Drawer.Screen name="Tela de perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
