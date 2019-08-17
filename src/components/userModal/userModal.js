import React, { useState, useEffect } from "react";

function UserModal (props) {
  const {name, username, email, website} = props.data
  const {title, completed} = props.userTodosData[1]
  return (
    <div>
        <div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
        <div>
            <p>Title: {title}</p>
            <p>Completed: { completed ? <p>Yes</p> : <p>No</p>}</p>
    </div>

    </div>
  );
}

export default UserModal