import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendslist: [],
    };
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        this.setState({
          friendslist: res.data,
        });
      })
      .catch((err) => console.log([err]));
  };

  componentDidMount() {
      this.getData();
  }

  render() {
    return (
      <div>
          <h1>Friends List</h1>
        {this.state.friendslist.map((friend) => (
          <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default FriendsList;
