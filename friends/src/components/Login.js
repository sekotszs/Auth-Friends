import React from "react";
import  axios from 'axios'

class Login extends React.Component {

state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.credentials);
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/friendslist")
      })
      .catch((err) => console.log({ err }));
    }



  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>LOG IN</button>
        </form>
        {this.state.isLoading && <div><h3>Logging in</h3></div>}
      </div>
    );
  }
}

export default Login;
