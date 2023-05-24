import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useState, useEffect } from "react";

type Props = {
  lineNumber: string;
};

export default function CardNumeroLine(props: Props) {
  const { lineNumber } = props;

  // state
  const [backgroundColor, setBackgroundColor] = useState("gray");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    // choix couleur
    const firstLetter = lineNumber[0];

    // switch
    switch (firstLetter) {
      case "K":
        setBackgroundColor("red");
        break;
      case "C":
        setBackgroundColor("blue");
        setTextColor("white");
        break;
      case "P":
        setBackgroundColor("green");
        break;
    }
  }, []);

  const style = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      padding: 5,
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
      color: textColor,
    },
  });

  return (
    <View style={style.container}>
      <Text style={style.text}>{lineNumber}</Text>
    </View>
  );
}
