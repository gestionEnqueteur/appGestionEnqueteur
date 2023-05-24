import { View, StyleSheet } from "react-native"; 
import { Text } from "react-native-paper"; 

type Props = {
  lineNumber: string;
}

export default function CardNumeroLine(props: Props) {

  const { lineNumber } = props; 

  return (
    <View style={style.container}>
      <Text style={style.text}>{lineNumber}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,

  },
  text: {
    fontSize: 20,
  }
})