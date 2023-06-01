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
      <View >
        <Text style={styles.timeStart}>
          {departureTime.getHours()}:{departureTime.getMinutes()}
        </Text>
        <Text style={styles.timeEnd}>
          {arrivalTime.getHours()}:{arrivalTime.getMinutes()}
        </Text>
      </View>
        <Divider style={styles.divider} />
      <View >
        <Text style={styles.cityStart}>{departureCity}</Text>
        <Text style={styles.cityEnd}>{arrivalCity}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
   
  },
  
  timeStart: {
    fontSize: 24,
    fontWeight: "bold",
   
  },
  timeEnd: {
   
    fontSize: 24,

   
  },
  cityStart: {
   
    fontWeight: "bold",
 
    fontSize: 24,
  },
  cityEnd: {
    marginLeft: 0,
    fontSize: 24,
  },
  divider: {
 
   
    height: "80%",
    width: 3,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
});
export default DetailTrajet;
