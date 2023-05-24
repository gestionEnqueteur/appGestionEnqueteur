
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Modal, Portal, TextInput } from "react-native-paper";

type SupressionTrain = {
  visible: boolean;
  
};

export default function SupressionTrain(props: SupressionTrain) {
  const { visible } = props;

  return (
    <Portal>
      <Modal visible={visible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Motif de suppression du train</Text>
          <TextInput style={styles.input} />
          <Button mode="contained" style={styles.button}>
            Valider
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#ADD8E6",
    padding: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: 350,
  },
  button: {
    backgroundColor: "#D3D3D3",
    margin: 10,
    width: 200,
  },
});
