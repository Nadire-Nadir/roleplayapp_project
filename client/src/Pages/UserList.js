import React from "react";
import axios from "axios";
import Spinner from "../components/spinner";

class UserList extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            users: [],
            loading: true, 
            status: ""
        };
    }

    componentDidMount() {  
        axios 
        .get("/account/all")
        .then((res) => {
            this.setState({
                accounts: res.data,
                loading: false,   
            });   
        })
        .catch(function (error) {
            console.log("Fetching error", error);
        });
    }

    delete = (id) => {
        axios.delete(`/account/${id}`, {})
        .then((res) => {
            this.setState({
                status: "Deleted!"
            })
            console.log("Deleted!");
        })
    }

    render() {
        const { accounts, loading } = this.state;
        if(loading) {
            return (
                <div id="accountList">
                    <Spinner />
                </div>
            );
        }
        
        return (
            <div id="home">
                {accounts.map((item) => {
                    return (
                        <li className="userlist" key={item._id}>
                            {"New user: "}
                            {item.user_name}
                            {"  Email: "}
                            {item.email}
                            {" "}
                            {"Password: "}
                            {item.password}
                            <br />
                            <div className="Delete_User" id="action_btns">
                                <button type="button" onClick={() => this.delete(item._id)}>
                                    Delete
                                </button>
                            </div>
                            <div className="edit_User" id="action_btns">
                                <button type="button">
                                    Edit
                                </button>
                            </div>
                        </li>                       
                    ); 
                })}
            </div>

        );
    }
}

export default UserList;