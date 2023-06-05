import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ChronoTopDepart from "./ChornoTopDepart";
import DetailTrajet from "./DetailTrajet";
import MenuBurger from "./MenuBurger";
import CardNumeroLine from "./CardNumeroLine";
import Quotas from "./Quotas";
import styles from "./modals/modalStyle";

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
      <View style={styles.infoLine}>
        <CardNumeroLine lineNumber="K12" />
        <Quotas value={80} />
        <Text variant="headlineSmall">{842526}</Text>
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
  line: {
    flexDirection: "row",
  },
});
