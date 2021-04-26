import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBreeds from "./components/AllBreeds";
import FavoriteBreed from "./components/FavoriteBreed";

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Navbar />

          <div className="pages">
            <Switch>
              <Route exact path="/" component={FavoriteBreed} />
              <Route path="/FavoriteBreed" component={FavoriteBreed} />
              <Route path="/AllBreeds" component={AllBreeds} />
            </Switch>
          </div>
        </Router>
      </>
    </Provider>
  );
}

export default App;
