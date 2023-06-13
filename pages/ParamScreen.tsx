import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, Surface } from "react-native-paper";

export default function ParamScreen() {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Surface style={style.areaParam}>
        <View>
          <Text>URL API : </Text>
          <TextInput
            mode="outlined"
            label="Endpoint API"
            placeholder="URL API"
          />
        </View>
        <View>
          <Text>Enquetteur</Text>
          <TextInput
            mode="outlined"
            label="enqueteur"
            placeholder="trigramme enqueteur
           ou nom enqueteur"
          />
        </View>
        <View style={style.buttonArea}>
          <View>
            <Button mode="contained-tonal">Tester API</Button>
          </View>
          <View>
            <Button mode="contained-tonal">Enregistrer</Button>
          </View>
        </View>
      </Surface>
      <Button mode="contained">Syncronisation enquête</Button>
      <Button mode="contained">Recherche mise à jour application</Button>
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
  }

});
