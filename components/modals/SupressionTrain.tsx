import React from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./modalStyle";

export default function SupressionTrain() {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalContainer}>Motif de suppression du train</Text>
      <TextInput />
      <Button mode="contained" style={styles.button}>
        Valider
      </Button>
    </View>
  );
}