import React, { useState, useEffect } from "react";

function Table (props) {
  const [data, setData] = useState({ users: props.data });

  return (
    <div>
      <table>
          <tbody>
          <tr>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th >WEB-SITE</th>
          </tr>
            { data.users.map((item, i) => {
                return (<tr key={i} onClick={props.userModalInitiate.bind(null, i)}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>)})
            }
            </tbody>
      </table>
    </div>
  );
}

export default Table