import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, Surface, Snackbar } from "react-native-paper";
import { useEffect, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ConfigurationContext } from "../provider/ConfigurationProvider";

export default function ParamScreen() {
  const { configuration, setConfiguration } = useContext(ConfigurationContext);
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const [labelSnackBar, setLabelSnackBar] = useState("");
  const [iconSnackBar, setIconSnackBar] = useState("");

  const handleOnChangeURL = (newValue: string) => {
    setConfiguration({ ...configuration, urlApi: newValue });
  };

  const handleOnChangeInvertigator = (newValue: string) => {
    setConfiguration({ ...configuration, invertigator: newValue });
  };

  const displaySnackBar = (label: string, icon: string) => {
    // mettre a jour le state
    setLabelSnackBar(label);
    setIconSnackBar(icon);

    // affichage de la snackBar
    setVisibleSnackBar(true);
  };

  const saveConfiguration = async () => {
    try {
      const jsonValue = JSON.stringify(configuration);
      await AsyncStorage.setItem("configuration", jsonValue);
      displaySnackBar("Paramètre sauvegardé", "content-save");
    } catch (e) {
      displaySnackBar("Echec d'enregistrement", "alert-circle");
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Surface style={style.areaParam}>
        <View>
          <Text>URL API : </Text>
          <TextInput
            mode="outlined"
            label="Endpoint API"
            placeholder="URL API"
            onChangeText={handleOnChangeURL}
            value={configuration.urlApi}
          />
        </View>
        <View>
          <Text>Enquetteur</Text>
          <TextInput
            mode="outlined"
            label="enqueteur"
            placeholder="trigramme enqueteur
           ou nom enqueteur"
            onChangeText={handleOnChangeInvertigator}
            value={configuration.invertigator}
          />
        </View>
        <View style={style.buttonArea}>
          <View>
            <Button
              mode="contained-tonal"
              onPress={() => console.log("click sur le bouton Tester API")}
            >
              Tester API
            </Button>
          </View>
          <View>
            <Button mode="contained-tonal" onPress={saveConfiguration}>
              Enregistrer
            </Button>
          </View>
        </View>
      </Surface>
      <Button mode="contained">Syncronisation enquête</Button>
      <Button mode="contained">Recherche mise à jour application</Button>
      <Snackbar
        visible={visibleSnackBar}
        onDismiss={() => setVisibleSnackBar(false)}
        icon={iconSnackBar}
        onIconPress={() => setVisibleSnackBar(false)}
        duration={2000}
        action={{
          label: "fermer",
          onPress: () => {
            setVisibleSnackBar(false);
          },
        }}
      >
        {labelSnackBar}
      </Snackbar>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 7,
    justifyContent: "space-evenly",
    gap: 6,
  },
  areaParam: {
    gap: 5,
    padding: 4,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
