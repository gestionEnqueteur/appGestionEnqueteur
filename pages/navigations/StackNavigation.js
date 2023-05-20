import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuBottomTabs from './MenuBottomTabs';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();

export default function MyMainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={MenuBottomTabs} />
      <Stack.Screen name="Test" component={HomeScreen} />
    </Stack.Navigator>
  );
}

