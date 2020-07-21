import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import home from "../Pages/home";
import CreateCharacter from "../Pages/createCharacter";
import CreateAccount from "../Pages/createAccount";
import SignIn from "../Pages/signIn";
import userlist from "../Pages/UserList";
import CharacterSheet from "../Pages/characterSheet";


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={home} />
          <Route exact path="/createCharacter" component={CreateCharacter} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/userlist" component={userlist} />
          <Route exact path="/characterSheet/:id" component={CharacterSheet} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

