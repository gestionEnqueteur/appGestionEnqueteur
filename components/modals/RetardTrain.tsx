import React from "react";
import { View, Text, StyleSheet,PixelRatio } from "react-native";
import { Button, Modal, Portal, TextInput, Divider } from "react-native-paper";


 const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;


type props = {
  visible: boolean;
 
};

export default function RetardTrain(props: props) {
  const { visible } = props;

  return (
    <Portal>
      <Modal visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.columnContainer}>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>Retard départure</Text>
              <TextInput style={styles.input} />

              <Text style={styles.columnTitle}>Retard arival</Text>
              <TextInput style={styles.input} />
              </View>
              <View style={styles.buttonContainer}>
              <Button mode="contained" style={styles.squareButton}>
                <Text style={styles.columnTitlePush}>Top départ</Text>
              </Button>
              <Button mode="contained" style={styles.squareButton}>
                <Text style={styles.columnTitlePush}>Top arriver</Text>
              </Button>
            </View>
          </View>
          <Button mode="contained" style={styles.button}>
             <Text style={styles.columnTitlePush}>Valider</Text>
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
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  columnContainer: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  columnTitle: {
    fontSize: 12,
    color: "black",
  },
  columnTitlePush: {
    fontSize: 8,
    color: "black",
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 12,

    marginBottom: 10,
    marginTop: 10,
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  squareButton: {
    backgroundColor: "#00ff00",
    width: 90,
    height: 50,
    marginTop: 10,

    justifyContent: "center",
  },
  button: {
    backgroundColor: "gray",

    marginBottom: 10,
    marginTop: 20,
  },
});
