import React from "react";
import "./PlansScreen.css";
import plans from "./plans.json";

function PlansScreen() {
  const arr = plans.plans;
  return (
    <div className="plansScreen">
      <p>Renewal date: 01/01/51</p>
      {arr.map(({ price, name, description, active }) => {
        return (
          <div
            key={Math.floor(Math.random() * 100)}
            className={
              !active ? "plansScreen__plan" : "plansScreen__plan--disabled"
            }
          >
            <div className="planScreen__info">
              <h5>{name}</h5>
              <h6>{description}</h6>
            </div>
            <button>{active ? "Current Plan" : "Subcribe"}</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
