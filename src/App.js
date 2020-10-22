import React from "react";
import "./App.css";
import DogsList from "./components/DogsList";
import NavBar from "./components/NavBar";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <DogsList />
    </Provider>
  );
}

export default App;
