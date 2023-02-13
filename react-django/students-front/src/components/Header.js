import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg?w=2000"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
