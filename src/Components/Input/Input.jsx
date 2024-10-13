import React, { useState } from "react";

export default function Input(props) {
  if (props.type === "checkbox") {
    return (
      <>
        <div className="policy">
          <input
            type="checkbox"
            onChange={props.change}
            onFocus={props.onfucos}
          />
          <h3>{props.name}</h3>
        </div>
        <span>{props.error && props.fucosed && props.error}</span>
      </>
    );
  } else {
    return (
      <div className="input-box">
        <label htmlFor="">{props.name}</label>
        <input
          name={props.name}
          type={props.type}
          placeholder={`Enter your ${props.name}`}
          onChange={props.change}
          onClick={props.click}
          onFocus={props.onfucos}
          required
        />
        <br />
        <span>{props.error && props.fucosed && props.error}</span>
      </div>
    );
  }
}
