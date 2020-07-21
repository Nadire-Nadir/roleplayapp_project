import React from "react";
import AddCharacter from "../components/addCharacter";
import Header from "../components/header";



const CreateCharacter = () => (
    <div className="page">
        <div className="page_content">
            <Header directto="" btnlabel="Back to my characters" pagetitle="Create character" />
            <AddCharacter />
        </div>
    </div>

);

export default CreateCharacter;