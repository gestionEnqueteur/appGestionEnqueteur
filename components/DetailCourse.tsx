import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ChronoTopDepart from "./ChornoTopDepart";
import DetailTrajet from "./DetailTrajet";
import MenuBurger from "./MenuBurger";
import CardNumeroLine from "./CardNumeroLine";
import Quotas from "./Quotas";

const dateOfTest = new Date();

export default function DetailCourse() {
  return (
    <View style={style.container}>
      <View></View>
      <View style={style.lineUp}>
        <View style={style.detailTime}>
          <ChronoTopDepart
            currentDatetime={dateOfTest}
            datetimeArrival={dateOfTest}
            datetimeDepart={dateOfTest}
          />
          <DetailTrajet
            departureTime={dateOfTest}
            arrivalTime={dateOfTest}
            departureCity="Lille"
            arrivalCity="Paris"
          />
        </View>
        <View>
          <MenuBurger />
        </View>
      </View>
      <View style={style.infoLine}>
        <CardNumeroLine lineNumber="K12" />
        <Quotas value={80} />
        <Text variant="headlineSmall">842526</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: "1%",
    padding: "1%",
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
  },
  lineUp: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  infoLine: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailTime: {
    flexDirection: "row",
    width: 200,
  },
});
