import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  img: { height: 100, width: 100, marginRight: 15 },
  rowFit: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
