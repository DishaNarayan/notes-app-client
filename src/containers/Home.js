import React, { Component } from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      {!this.props.isAuthenticated && <Redirect to="/login"/>}
        <div className="lander">
        <table>
  <tr>
    <th>Classes</th>
    <th>Sections</th>
  </tr>
  <tr>
    <td>V</td>
    <td>A</td>
  </tr>
  <tr>
    <td>VII</td>
    <td>C</td>
  </tr>
  <tr>
    <td>X</td>
    <td>D</td>
  </tr>
  <tr>
    <td>III</td>
    <td>B</td>
  </tr>
  <tr>
    <td>IV</td>
    <td>A</td>
  </tr>
  
</table>
        </div>
      </div>
    );
  }
}
