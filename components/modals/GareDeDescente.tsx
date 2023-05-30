import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";
import styles from "./modalStyle";

export default function GareDeDescente() {
  // juste pour le test
  const listGare = [
    { _id: "1", value: "Paris" },
    { _id: "2", value: "Creil" },
    { _id: "3", value: "Longueau" },
  ];
  const gareSeleted = [{ _id: "2", value: "Creil" }];
  return (
    <View style={styles.modalContainer}>
      <Text variant="titleLarge">Gare de descente enqueteur</Text>
      <PaperSelect
        label="gare de descende"
        arrayList={listGare}
        selectedArrayList={gareSeleted}
        multiEnable={false}
        value="Longueau"
        onSelection={() => console.log("salut")}
      />
      <Button mode="contained">Valider</Button>
    </View>
  );
}
