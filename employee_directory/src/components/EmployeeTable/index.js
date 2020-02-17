import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Desk:</strong> {props.deskPhone}
          </li>
          <li>
            <strong>Mobile:</strong> {props.mobilePhone}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeTable;
