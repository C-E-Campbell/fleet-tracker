import React from "react";
import "./VehicleCard.scss";
export default function VehicleCard(props) {
  return (
    <div>
      <div className="vehicle-card">
        {props.id}
        {props.deadline ? (
          <h5>Deadlined</h5>
        ) : (
          <div>
            {props.pmcs ? <button className="btn pmcs">PMCS</button> : null}
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
