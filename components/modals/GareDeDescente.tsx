import React from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./modalStyle";

export default function GareDeDescente() {
  return (
    <View style={styles.modalContainer}>
      <Text>Gare de descente enqueteur</Text>
      <TextInput mode="outlined" />
      <Button mode="contained">Valider</Button>
    </View>
  );
}
