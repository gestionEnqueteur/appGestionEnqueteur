import React from "react";
import { View, Text } from "react-native";

//  // Remplacez FontAwesome par le nom de la bibliothèque d'icônes que vous souhaitez utiliser
import Icon from "react-native-vector-icons/Ionicons";

type PropsQuotas = {
  value: number;
};

export default function Quotas({ value }: PropsQuotas) {
  return (
    <View>
      <Text>
        {"  "}Objectif{"  "}
        <Icon name="receipt-outline" size={40} color="#000" />
        {""}
        {value}
        {"  "}
      </Text>
    </View>
  );
}
