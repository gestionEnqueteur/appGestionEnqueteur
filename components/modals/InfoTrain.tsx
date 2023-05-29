import React from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./modalStyle";

export default function InfoTrain() {
  return (
    <View style={styles.modalContainer}>
      <View>
        <Button mode="contained" style={styles.squareButton}>
          <Text style={styles.columnTitlePush}>US</Text>
        </Button>
        <Button mode="contained" style={styles.squareButton}>
          <Text style={styles.columnTitlePush}>UM2</Text>
        </Button>
        <Button mode="contained" style={styles.squareButton}>
          <Text style={styles.columnTitlePush}>UM3</Text>
        </Button>
      </View>
      <TextInput />
      <Button mode="contained" style={styles.button}>
        <Text style={styles.columnTitlePush}>Valider</Text>
      </Button>
    </View>
  );
}
