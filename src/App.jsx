/** @format */

import { Outlet } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useState } from "react";

function App() {

   const [location, setLocation] = useState({
     latitude: 28.7040592,
     longitude: 77.10249019999999,
   });
  return (
    <Provider store={appStore}>
      <Header onLocationChange={setLocation} />
      <Outlet context={{ location }} />
    </Provider>
  );
}

export default App;
