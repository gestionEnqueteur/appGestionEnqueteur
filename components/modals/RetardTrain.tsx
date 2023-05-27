import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Button, TextInput } from "react-native-paper";



export default function RetardTrain() {
  return (
    
    <View style={styled.modalContainer}>
      <View style={styled.columnContainer}>
        <View style={styled.column}>
          <Text style={styled.columnTitle}>Retard départure</Text>
          <TextInput style={styled.input} />

          <Text style={styled.columnTitle}>Retard arival</Text>
          <TextInput style={styled.input} />
        </View>
        <View style={styled.buttonContainer}>
          <Button mode="contained" style={styled.squareButton}>
            <Text style={styled.columnTitlePush}>Top départ</Text>
          </Button>
          <Button mode="contained" style={styled.squareButton}>
            <Text style={styled.columnTitlePush}>Top arriver</Text>
          </Button>
        </View>
      </View>
      <Button mode="contained" style={styled.button}>
        <Text style={styled.columnTitlePush}>Valider</Text>
      </Button>
    </View>
  );
}

 const styled = StyleSheet.create({
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
 