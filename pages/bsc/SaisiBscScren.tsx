import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  SegmentedButtons,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";

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
      <Surface style={style.header} mode="elevated">
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
      </Surface>
      <ScrollView style={style.mainContent}>
        <View style={style.splitScreenVertical}>
          <View style={style.infoTrain}>
            <Text variant="labelMedium">Composition : </Text>
            <Avatar.Text label="US" size={40} />
            <Text variant="labelMedium">Numéro de matériel :</Text>
            <Text style={style.offsetRight} variant="bodyLarge">21 82 889</Text>
          </View>
          <View style={style.retardTrain}>
            <Text variant="labelMedium">Retard au départ :</Text>
            <Text style={style.offsetRight} variant="bodyLarge">10 min</Text>
            <Text variant="labelMedium">Retard à l'arrivé :</Text>
            <Text style={style.offsetRight} variant="bodyLarge">15 min</Text>
          </View>
        </View>
        <View style={style.quotasBsc}>
          <TextInput mode="outlined" label="Questionnaire distribué : " />
          <TextInput mode="outlined" label="Questionnaire récupéré vide :" />
          <TextInput mode="outlined" label="Questionnaire Inexploitable : " />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
  },
  header: {
    flexDirection: "column",
  },
  circulation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoCourse: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainContent: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  infoTrain: {
    flex: 1,
  },
  retardTrain: {
    flex: 1,
  },
  offsetRight: {
    alignSelf: "flex-end", 
  },
  splitScreenVertical: {
    flexDirection: "row",
  },
  quotasBsc: {},
});
