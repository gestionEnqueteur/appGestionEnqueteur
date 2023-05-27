import { View, StyleSheet, ScrollView } from "react-native";
import DetailCourse from "../components/DetailCourse";
import { FlatList } from "react-native";

export default function TrainPlanifieScreen() {
  return (
    <ScrollView style={style.container}>
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
      <DetailCourse />
    
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 5, 
    
  },
});
