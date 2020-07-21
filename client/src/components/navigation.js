import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/createCharacter">Create New</Link>
    </li>
    <li>
      <Link to="/createAccount">Sign Up</Link>
    </li>
    <li>
      <Link to="/signIn">Log In</Link>
    </li>
    <li>
      <Link to="/userlist">User List</Link>
    </li>
    <li>
      <Link to="/characterSheet">Character sheet</Link>
    </li>
  </ul>
);
