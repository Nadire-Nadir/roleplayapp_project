import React from "react";
import AddAccount from "../components/addAccount";
import "../styles/form.css";


const CreateAccount = () => (
    <div className="page" id="auth_page">       
        <div className="page_content auth_page_content">
            <AddAccount />

        </div>
        
    </div>

);

export default CreateAccount;