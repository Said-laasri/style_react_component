import React from "react";

const SingleUser = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li style={{ cursor: "pointer" }} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default SingleUser;
