import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";
// import DropDown from "./components/DropDown";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
