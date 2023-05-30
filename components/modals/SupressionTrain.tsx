import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";
import styles from "./modalStyle";

export default function SupressionTrain() {
  // juste pour le test
  const motifSuppression = [
    { _id: "1", value: "Accident de personne" },
    { _id: "2", value: "Panne d'un PN" },
    { _id: "3", value: "Panne Matériel" },
  ];
  const motifSuppressionSelected = [{ _id: "2", value: "Panne d'un PN" }];

  return (
    <View style={styles.modalContainer}>
      <Text variant="titleLarge">Motif de suppresion train</Text>
      <PaperSelect
        label="raison d'annulation"
        arrayList={motifSuppression}
        selectedArrayList={motifSuppressionSelected}
        multiEnable={false}
        value="Panne d'un PN"
        onSelection={() => console.log("salut")}
      />
      <Button mode="contained">Valider</Button>
    </View>
  );
}
