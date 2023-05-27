
import { StyleSheet} from "react-native";

 
const styles = StyleSheet.create({
  modalContainer: {
   
    backgroundColor: "#ADD8E6",
    padding: 10,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },

  input: {
    width: 350,
  },
  button: {
    backgroundColor: "#D3ffD3",
    margin: 10,
    width: 100,
  },
  columnContainer: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  columnTitle: {
    //fontSize: 12,
    color: "black",
  },
  columnTitlePush: {
    //fontSize: 18,
    color: "black",
  },
  squareButton: {
    backgroundColor: "#00ff00",
    width: 90,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
  },
});

export default styles; 
