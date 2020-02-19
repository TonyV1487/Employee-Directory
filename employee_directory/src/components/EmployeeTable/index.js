import React from "react";

function EmployeeTable(props) {
  const { onSort } = props;
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th
            scope="col"
            onClick={() => {
              onSort("firstName");
            }}
          >
            First
          </th>
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
