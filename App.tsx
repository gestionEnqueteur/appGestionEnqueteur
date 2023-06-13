import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MyMainStack from "./pages/navigations/StackNavigation";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyMainStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
