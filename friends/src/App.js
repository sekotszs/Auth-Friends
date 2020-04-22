import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Login from ".//components/Login";
import PrivateRoute from ".//components/PrivateRoute";
import FriendsList from ".//components/FriendsList";
import AddFriend from ".//components/AddFriend";

function App() {
  return (
    <Router>
      <div>
        <PrivateRoute path="/friendslist" component={FriendsList} />
        <Route path ='/login' component={Login}/>
        <PrivateRoute path ='/addfriend' component={AddFriend} />
        Ew
      </div>
    </Router>
  );
}
export default App;
