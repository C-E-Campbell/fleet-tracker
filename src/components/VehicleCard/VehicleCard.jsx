import React from "react";
import "./VehicleCard.scss";
export default function VehicleCard(props) {
  return (
    <div>
      <div
        className={`vehicle-card ${
          props.deadline ? "deadlined deadlinedborder" : ""
        }`}
      >
        <h3> {props.id}</h3>

        {props.deadline ? (
          <h5 className="deadlined">Deadlined</h5>
        ) : (
          <div>
            {!props.faults && !props.service ? (
              <button className="btn pmcs">Good</button>
            ) : null}
            {props.faults ? (
              <button className="btn faults">Faults</button>
            ) : null}
            {props.service ? (
              <button className="btn service">Service</button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
