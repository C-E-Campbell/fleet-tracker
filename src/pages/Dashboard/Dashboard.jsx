import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Dashboard.scss";
import VehicleCard from "../../components/VehicleCard/VehicleCard";

const dummyData = [
  { id: "#56765", pmcs: true, faults: false, service: false, deadline: false },
  { id: "#59365", pmcs: true, faults: false, service: true, deadline: false },
  { id: "#76725", pmcs: true, faults: true, service: false, deadline: false },
  { id: "#16435", pmcs: true, faults: true, service: true, deadline: false },
  { id: "#87324", pmcs: true, faults: true, service: true, deadline: true }
];

class Dashboard extends Component {
  render() {
    const vehicleInventory = dummyData.map(
      ({ id, pmcs, faults, service, deadline }) => {
        return (
          <VehicleCard
            key={id}
            id={id}
            service={service}
            faults={faults}
            deadline={deadline}
          />
        );
      }
    );
    return (
      <div className="dashboard">
        <header className="header">
          <div className="header-logoutContainer">
            <h2>FleetTrak</h2>
            <button onClick={() => this.props.history.push("/")}>Logout</button>
          </div>
          <section className="header-userContainer">
            <h4>Charles Campbell</h4>
            <div className="header-userDetails">
              <h4>1/1/2020</h4>
              <h4>Saia MTR GRP</h4>
            </div>
          </section>
        </header>

        <h3>Vehicle Manifest</h3>
        <section>{vehicleInventory}</section>
      </div>
    );
  }
}

export default withRouter(Dashboard);
