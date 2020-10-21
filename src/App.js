import React from "react";
import "./App.css";
import DogsList from "./components/dogsList";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <DogsList />
    </Provider>
  );
}

export default App;
