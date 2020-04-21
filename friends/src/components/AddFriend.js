import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import PrivateRoute from "./PrivateRoute";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdetails: {
        name: "",
        age: "",
        email:'',
      },
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      userdetails: {
       ...this.state.userdetails,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.credentials);
  };

  addFriend = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.userdetails)
      .then((res) => {
        this.props.history.push("/friendslist");
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log({ err }));
  };

  
  render() {
    return (
      <div>
<h1>ADD FRIEND</h1>
        <form onSubmit={this.addFriend}>
        <input
        
            type="text"
            name="name"
            value={this.state.userdetails.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.userdetails.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.userdetails.email}
            onChange={this.handleChange}
          />
          <button>ADD FRIEND</button>
        </form>
        {this.state.isLoading && <div><h3>Loading...</h3></div>}
      </div>
    );
  }
}

export default AddFriend;