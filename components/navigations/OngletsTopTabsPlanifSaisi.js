import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../../pages/HomeScreen";
import SettingsScreen from "../../pages/SettingsScreen";

const Tab = createMaterialTopTabNavigator();

export default function OngletsTopTabPlaniSaisi() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
