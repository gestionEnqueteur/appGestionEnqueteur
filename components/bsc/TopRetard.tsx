import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function TopRetard() {
  return (
    <View style={style.container}>
      <View style={style.half}>
        <TextInput label="Retard au départ" mode="outlined" />
      </View>
      <View style={style.half}>
        <Button mode="contained">Top départ</Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", 
    gap: 30
  },
  half: {
    flexDirection: "column",
    flex: 1, 
  },
});
