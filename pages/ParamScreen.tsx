import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, Surface, Snackbar } from "react-native-paper";
import { useEffect, useContext, useState } from "react";
import ConfigurationType from "../models/ConfigurationType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ConfigurationContext } from "../provider/ConfigurationProvider";

export default function ParamScreen() {
  const { configuration, setConfiguration } = useContext(ConfigurationContext);
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);

  const handleOnChangeURL = (newValue: string) => {
    console.log(newValue);
    setConfiguration({ ...configuration, urlApi: newValue });
    console.log(configuration);
  };

  const handleOnChangeInvertigator = (newValue: string) => {
    console.log(newValue);
    setConfiguration({ ...configuration, invertigator: newValue });
    console.log(configuration);
  };

  const saveConfiguration = async () => {
    try {
      const jsonValue = JSON.stringify(configuration);
      await AsyncStorage.setItem("configuration", jsonValue);
      setVisibleSnackBar(true);
    } catch (e) {
      console.log(e);
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
        icon="content-save"
        onIconPress={() => setVisibleSnackBar(false)}
        duration={2000}
        action={{
          label: "fermer",
          onPress: () => {
            setVisibleSnackBar(false);
          },
        }}
      >
        Configuration sauvegardé
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
