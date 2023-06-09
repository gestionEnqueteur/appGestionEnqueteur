import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ChronoTopDepart from "./ChornoTopDepart";
import DetailTrajet from "./DetailTrajet";
import MenuBurger from "./MenuBurger";
import CardNumeroLine from "./CardNumeroLine";
import Quotas from "./Quotas";


import Course from "../models/Course";

type Props = {
  course: Course;
};

const dateOfTest = new Date();

export default function DetailCourse(props: Props) {
  const { course } = props;

  const [dateTimeHd, setDateTimeHd] = useState(new Date()); 
  const [dateTimeHa, setDateTimeHa] = useState(new Date()); 

  // pour le test en attende de modification du Mock; 
  const dateTimeDeparture = "2023-06-09T07:33:14.719Z" ; 
  const datetimeArrival = "2023-06-09T07:59:56.333Z" ; 

  useEffect(() => {

    setDateTimeHd(new Date(dateTimeDeparture)); 
    setDateTimeHa(new Date(datetimeArrival)); 
    
    
  }, []);

  return (
    <View style={style.container}>
      <View></View>
      <View style={style.lineUp}>
        <View style={style.detailTime}>
          <ChronoTopDepart
            currentDatetime={dateOfTest}
            datetimeArrival={dateOfTest}
            datetimeDepart={dateOfTest}
          />
          <DetailTrajet
            departureTime={dateTimeHd}
            arrivalTime={dateTimeHa}
            departureCity={course.depart}
            arrivalCity={course.arrivee}
          />
        </View>
        <View>
          <MenuBurger />
        </View>
      </View>
      <View style={style.infoLine}>
        {course.ligne && <CardNumeroLine lineNumber={course.ligne} />}
        {course.prQuota && <Quotas value={course.prQuota} />}
        <Text variant="headlineSmall">{course.trainCourse}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: "1%",
    padding: "1%",
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
  },
  lineUp: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  infoLine: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailTime: {
    flexDirection: "row",
    width: 200,
  },
});
