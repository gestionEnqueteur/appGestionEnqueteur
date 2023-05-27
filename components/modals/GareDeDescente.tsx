import React from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./ModalStyle";



export default function GareDeDescente() {
  
  return (
    
        <View style={styles.modalContainer}>
          <Text style={styles.modalContainer}>Gare de descente enqueteur</Text>
          <TextInput style={styles.input} />
          <Button mode="contained" style={styles.button}>
            Valider
          </Button>
        </View>
      
  );
}

