import React from 'react';
import '../assets/avatar.jpg';
import './User.css';

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img src="../assets/avatar.jpg" width="200" height="200" />
        <h1 className="user-title">HELLO,</h1>
        <h2 className="user-introduce">MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}
export default User;
