import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Desk Phone</th>
          <th scope="col">Mobile Phone</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default EmployeeTable;

{
  /* <div className="card">
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
    </div> */
}
