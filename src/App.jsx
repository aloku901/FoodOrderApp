import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

function App() {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
      </>
    </Provider>
  );
}

export default App;
