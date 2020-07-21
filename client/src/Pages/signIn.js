import React from "react";
import LogIn from "../components/logIn";
import "../styles/form.css";


const SignIn = () => (
    <div className="page" id="auth_page">
        <div className="page_content auth_page_content">
            <LogIn />
        </div>
    </div>

);

export default SignIn;