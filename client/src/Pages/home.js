import React from "react";
import { Navigation } from "../components/navigation";
import CharactersMap from "../components/charactersMap";
import Header from "../components/header";
import "../styles/home.css";

const Home = () => (
  <div className="page">
    <div className="page_content">
      <Header directto="createCharacter" btnlabel="Create new character" pagetitle="My characters" />
      <CharactersMap />    
      <Navigation />
    </div>
    
  </div>
  
);

export default Home;
