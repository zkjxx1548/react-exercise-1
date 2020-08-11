import React from 'react';
import '../assets/avatar.jpg';

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img src="../assets/avatar.jpg" width="200" height="200" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}
export default User;
