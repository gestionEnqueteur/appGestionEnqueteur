import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Divider } from "react-native-paper";

type PropsDetailTrajet = {
  departureTime: Date;
  arrivalTime: Date;
  departureCity: string;
  arrivalCity: string;
};

const DetailTrajet = (props: PropsDetailTrajet) => {
  const { departureTime, arrivalTime, departureCity, arrivalCity } = props;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.time}>
          {departureTime.getHours()}:{departureTime.getMinutes()}
        </Text>
        <Text style={styles.city}>
          {arrivalTime.getHours()}:{arrivalTime.getMinutes()}
        </Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.column}>
        <Text style={styles.time}>{departureCity}</Text>
        <Text style={styles.city}>{arrivalCity}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0F2FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
  column: {
    justifyContent: "center",
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
  },
  city: {
    fontSize: 24,
  },
  divider: {
    height: "80%",
    width: 1,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
});
export default DetailTrajet;
