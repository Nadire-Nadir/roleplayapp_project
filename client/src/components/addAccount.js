import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "../styles/logIn.css";
import "../styles/form.css";

class AddAccount extends React.Component {
    constructor(props) {
        super(props);

        this.take = this.take.bind(this);
        this.publish = this.publish.bind(this);

        this.state = {
            user_name: "",
            email: "",
            password: "",
            status: "",
            message: ""
        };
    }

    take = (e) => {                      
        e.preventDefault();
        switch (e.target.name) {
          case "user_name":
            return this.setState({ user_name: e.target.value });
          case "email":
            return this.setState({ email: e.target.value });
          case "password":
            return this.setState({ password: e.target.value });

          default:
            return this.setState({
              user_name: "",
              email: "",
              password: ""
            });
        }
    };
    
    publish = (e) => {
        e.preventDefault();
        const newAccount = {
          user_name: this.state.user_name,
          email: this.state.email,
          password: this.state.password
        };
        axios
            .post("/account/register", newAccount, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                this.props.history.push("/");
                this.setState({ status: "ok", message: "Published successfully!" });
            })
            .catch((error) => {
                this.setState({ status: "no", message: "Publishing failed!" });
                console.log("User auth error: " + error);
            });
    };

    render() {
        return (               
                <div className="auth_form_content">
                    <div className="form_block_user">
                    <div className="add_form_group">
                        <label className="add_form_label"> Username </label>
                        <div className="textInput">
                            <input
                                onChange={this.take}
                                name="user_name"
                                value={this.state.user_name}
                                type="text"
                                className="add_form_control user_input"
                                placeholder="Enter Username"
                            />
                        </div>
                    </div>

                    <br />

                    <div className="add_form_group">
                        <label className="add_form_label"> Email </label>
                        <div className="textInput">
                            <input
                                onChange={this.take}
                                name="email"
                                value={this.state.email}
                                type="email"
                                className="add_form_control user_input"
                                placeholder="Enter Email"
                            />
                        </div>
                    </div>
                    <br />

                    <div className="add_form_group">
                        <label className="add_form_label"> Password </label>
                        <div className="textInput">
                            <input
                                onChange={this.take}
                                name="password"
                                value={this.state.password}
                                type="password"
                                className="add_form_control user_input"
                                placeholder="Enter Password"
                            />
                        </div>
                    </div>
                    <br />

                    <div className="add_form_group log_In">                       
                        <button className="action_btns sign_btn" type="button" onClick={this.publish}>
                            SIGN UP
                        </button>                        
                    </div>
                    </div>

                </div>    
        );
    }
}

export default withRouter(AddAccount);