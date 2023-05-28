import React, { useState } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./ModalStyle";

export default function RetardTrain() {
  const [retardDepart, setRetardDepart] = useState("");
  const [retardArrivee, setRetardArrivee] = useState("");
  const [erreurDepart, setErreurDepart] = useState("");
  const [erreurArrivee, setErreurArrivee] = useState("");

  const handleDepartChange = (text: string) => {
    setRetardDepart(text);
    setErreurDepart("");
  };

  const handleArriveeChange = (text: string) => {
    setRetardArrivee(text);
    setErreurArrivee("");
  };

  const handleSubmit = () => {
    // Validation du retard au départ
    if (!/^\d+$/.test(retardDepart)) {
      setErreurDepart("Veuillez saisir un retard valide (en minutes).");
      return;
    }

    // Validation du retard à l'arrivée
    if (!/^\d+$/.test(retardArrivee)) {
      setErreurArrivee("Veuillez saisir un retard valide (en minutes).");
      return;
    }

    // Logique de soumission des données
    console.log("Retard au départ :", retardDepart);
    console.log("Retard à l'arrivée :", retardArrivee);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.modalContainer}>
        <View style={styles.infoRetard}>
          <View style={styles.saisi}>
            <TextInput
              mode="outlined"
              label="retard au départ"
              keyboardType="numeric"
              value={retardDepart}
              onChangeText={handleDepartChange}
            />
            <Text style={styles.errorText}>{erreurDepart}</Text>
          </View>
          <View style={styles.topSaisi}>
            <Button mode="contained" onPress={() => console.log("top départ")}>
              Top Départ
            </Button>
          </View>
        </View>
        <View style={styles.infoRetard}>
          <View style={styles.saisi}>
            <TextInput
              mode="outlined"
              label="retard arrivée"
              keyboardType="numeric"
              value={retardArrivee}
              onChangeText={handleArriveeChange}
            />
            <Text style={styles.errorText}>{erreurArrivee}</Text>
          </View>
          <View style={styles.topSaisi}>
            <Button mode="contained" onPress={() => console.log("top arrivée")}>
              Top Arrivé
            </Button>
          </View>
        </View>
        <View>
          <Button mode="contained" onPress={handleSubmit}>
            Valider
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
