import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#ADD8E6",
    padding: 10,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    gap: 6,
  },
  errorText: {
    backgroundColor: "#A8E6",
  },

  button: {},
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
  infoRetard: {
    flexDirection: "row",
    gap: 8,
    margin: 10,
    justifyContent: "center",
  },
  saisi: {
    flex: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  topSaisi: {
    flex: 45,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default styles;
