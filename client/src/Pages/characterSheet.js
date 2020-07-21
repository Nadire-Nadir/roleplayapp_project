import React from "react";
import CharacterSheetData from "../components/characterSheetData";
import Header from "../components/header";
import "../styles/form.css";

const CharacterSheet = () => (
      <div className="page" id="Csheet_page">
        <div className="page_content">
          <Header directto="" btnlabel="Back to my characters" pagetitle="Character Sheet"/>
            <CharacterSheetData />                  
        </div>       
      </div>
);
  
export default CharacterSheet;
