import React from "react";
//import "./FridgeBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually... className="delete-btn"
const fridgeBtn = props => (
<button type="button" className="btn btn-default btn-sm" {...props}>
     Move to Fridge {props._id}
  </button>
);

export default fridgeBtn;
