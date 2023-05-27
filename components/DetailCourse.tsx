import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ChronoTopDepart from "./ChornoTopDepart";
import DetailTrajet from "./DetailTrajet";
import MenuBurger from "./MenuBurger";
import CardNumeroLine from "./CardNumeroLine";

const dateOfTest = new Date();

export default function DetailCourse() {
  return (
    <View style={style.container}>
      <View style={style.line}>
        <ChronoTopDepart
          currentDatetime={dateOfTest}
          datetimeArrival={dateOfTest}
          datetimeDepart={dateOfTest}
        />
        <DetailTrajet
          departureTime={dateOfTest}
          arrivalTime={dateOfTest}
          departureCity="Lille Flandres"
          arrivalCity="Paris"
        />
        <MenuBurger />
      </View>
      <View style={style.line}>
        <CardNumeroLine lineNumber="K12" />
        <Text variant="headlineSmall">842526</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", 
  },
});
