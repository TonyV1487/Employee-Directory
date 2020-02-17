import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(friend => friend.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeTable component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeTable
            removeFriend={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            deskPhone={employee.deskPhone}
            mobilePhone={employee.mobilePhone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
