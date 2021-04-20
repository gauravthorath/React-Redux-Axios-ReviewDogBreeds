import React, { Component } from "react";
import NavBar from "react-responsive-menubar/lib/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllBreads from "../AllBreads";
import FavoriteBreed from "../FavoriteBreed";

class Navbar extends Component {
  state = { showSideNav: false };

  handleSideNavToggle = () => {
    this.setState((currentState) => {
      return { showSideNav: !currentState.showSideNav };
    });
  };

  render() {
    //Position of navbar container (header in this case) should be set to relative.
    return (
      <header className="header" style={{ position: "relative" }}>
        <NavBar
          handleSideNavToggle={this.handleSideNavToggle}
          logo={"https://dog.ceo/img/dog-api-logo.svg"}
          showSideNav={this.state.showSideNav}
          logoStyles={{
            height: "30px",
            width: "55px",
            position: "absolute",
            right: 0,
            top: 15,
          }}
          navBarStyles={{ boxShadow: "none" }}
          linkStyles={{
            color: "Purple",
            fontWeight: "bold",
          }}
        >
          <Router>
            <Link to="/FavoriteBreed">Favorite Breed</Link>
            {"  | "}
            <Link to="/AllBreads">Breed List</Link>
            <hr />
            <Switch>
              <Route exact path="/">
                <FavoriteBreed />
              </Route>
              <Route path="/FavoriteBreed">
                <FavoriteBreed />
              </Route>
              <Route path="/AllBreads">
                <AllBreads />
              </Route>
            </Switch>
          </Router>
          <hr></hr>
        </NavBar>
      </header>
    );
  }
}

export default Navbar;
