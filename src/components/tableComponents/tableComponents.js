import React, { useState, useEffect } from "react";
import Table from "../table/table";
import UserModal from "../userModal/userModal"

function TableComponents() {
  const [data, setData] = useState({ 
    users: [{
      name: null,
      email: null,
      username: null,
      website: null
    }],
    isLoading: false,
  });
  const [query, setQuery] = useState('users/');
  const [modal, setModal] = useState({
    userTodosData: [],
    isModalActive: false,
    userId: 0
  });

  // console.log(modal.isModalActive)

  useEffect(() => {
    let ignore = false;

    async function fetchData(queryValue) {
      const response = await fetch('https://jsonplaceholder.typicode.com/' + queryValue)
      const result = await response.json();
      
      if (!ignore) setData({ users: result, isLoading: true});
    }

    fetchData(query);
    return () => { ignore = true; }
  }, [query]);

  let userModalHandler = (id) => {
    async function fetchData(queryValue) {
      const response = await fetch('https://jsonplaceholder.typicode.com/' + queryValue)
      const result = await response.json();
      
      setModal({ userTodosData: result, isModalActive: true, userId: id})
    }
    fetchData("users/" + id + "/todos");
  }

  return (
    <div>
      <div>
        { data.isLoading ? <Table data={data.users}  userModalInitiate={userModalHandler}/> : <p>Идет загрузка...</p>}
      </div>
      <div>
        { modal.isModalActive ? <UserModal data={data.users[modal.userId]} userTodosData={modal.userTodosData}/> : null}
      </div>
    </div>
    
  );
}

export default TableComponents