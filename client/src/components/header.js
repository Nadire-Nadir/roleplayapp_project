import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

export const Header = (props) => (
    <div className="page_header">
        <div className="header_btn_div">
              <Link to={`/${props.directto}`}>
                <button className="action_btns header_btn" type="button">
                  {props.btnlabel}
                </button>
              </Link>
        </div>
        <div className="header_title">
            <h1>{props.pagetitle}</h1>
        </div>
    </div>

);

export default Header;