import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually... className="delete-btn"
const DeleteBtn = props => (
  <button class="glyphicon glyphicon-trash" {...props}>
  </button>
);

export default DeleteBtn;
