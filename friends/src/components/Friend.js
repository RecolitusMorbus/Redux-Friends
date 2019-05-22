import React from 'react';

const Friend = props => {
  return (
    <li>
      <p>
        <strong>{props.friend.name}</strong>,
        {" "}
        {props.friend.age}
        <br/>
        {props.friend.email}
      </p>
    </li>
  );
};

export default Friend;