import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper";

import CardNumeroLine from "../../components/CardNumeroLine";
import ChronoTopDepart from "../../components/ChornoTopDepart";
import DetailTrajet from "../../components/DetailTrajet";

// variable de test
const datetime = new Date();

// test composant

export default function SaisiBscCreen() {
  const [value, setValue] = useState("");

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.circulation}>
          <CardNumeroLine lineNumber="K12" />
          <Text variant="displaySmall">814206</Text>
        </View>
        <View style={style.infoCourse}>
          <ChronoTopDepart
            datetimeDepart={datetime}
            datetimeArrival={datetime}
            currentDatetime={datetime}
          />
          <DetailTrajet
            departureCity="Lille"
            arrivalCity="Paris"
            departureTime={datetime}
            arrivalTime={datetime}
          />
        </View>
      </View>
      <View style={style.mainContent}>
        <View style={style.splitScreenVertical}>
          <View style={style.infoTrain}>
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: "US",
                  label: "US",
                },
                {
                  value: "UM2",
                  label: "UM2",
                },
                { value: "UM3", label: "UM3" },
              ]}
            />
            <TextInput mode="outlined" label="Numéro de matériel : " />
          </View>
          <View style={style.retardTrain}>
            <TextInput mode="outlined" label="Retard au départ : " />
            <TextInput mode="outlined" label="Retard à l'arrivé : " />
          </View>
        </View>
      </View>
      <View style={style.quotasBsc} >
        <TextInput mode="outlined" label="Questionnaire distribué : " />
        <TextInput mode="outlined" label="Questionnaire récupéré vide :" />
        <TextInput mode="outlined" label="Questionnaire Inexploitable : " />

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "green",
    flexDirection: "column",
  },
  circulation: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoCourse: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainContent: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  infoTrain: {
    backgroundColor: "cyan",
    flex: 1,
  },
  retardTrain: {
    flex: 1,
  },
  splitScreenVertical: {
    flexDirection: "row",
  },
  quotasBsc: {
    backgroundColor: "orange", 
  }
});
