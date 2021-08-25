import React from "react";
import { View } from "react-native";
import styles from "./assets/styles/stylesheet";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./src/reducers";

import Homepage from "./src/pages/homepage";

const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View style={styles.container}>
        <Homepage />
      </View>
    </Provider>
  );
};

export default App;
