import React, { useState, useEffect } from "react";
import TableUsers from "../table/table";
import UserModal from "../userModal/userModal"

function TableComponents() {
  const [data, setData] = useState({ 
    users: [{
      id: undefined,
      name: undefined,
      username: undefined,
      email: undefined,   
      address: {
        street: undefined,
        suite: undefined,
        city: undefined,
        zipcode: undefined,
        geo: {
          lat: undefined,
          lng: undefined,
        }
      },
      phone: undefined,
      website: undefined,
      company: {
        name: undefined,
        catchPhrase: undefined,
        bs: undefined,
      },
    }],
    isLoading: false,
  });
  const [query] = useState('users/');
  const [modal, setModal] = useState({
    userTodosData: [],
    isModalActive: false,
    userArrayId: 0
  });

  useEffect(() => {
    let ignore = false;
    async function fetchData(queryValue: string) {
      const response = await fetch('https://jsonplaceholder.typicode.com/' + queryValue)
      const result = await response.json();     
      if (!ignore) setData({ users: result, isLoading: true});
    }

    fetchData(query);
    return () => { ignore = true; }
  }, [query]);

  let userModalHandler = (id: number) => {

    async function fetchData(queryValue: string) {
      const response = await fetch('https://jsonplaceholder.typicode.com/' + queryValue)
      const result = await response.json();    
      setModal({ userTodosData: result, isModalActive: true, userArrayId: id-1})
    }

    fetchData("todos?userId=" + id);
  }

  let userModalClose = () => {
    setModal({ userTodosData: [], isModalActive: false, userArrayId: 0})
  }

  return (
    <div>
      <div>
        { data.isLoading ? <TableUsers data={data.users}  userModalInitiate={userModalHandler}/> : <p>Идет загрузка...</p>}
      </div>
      <div>
        { modal.isModalActive ? 
        <UserModal 
        data={data.users[modal.userArrayId]} 
        userTodosData={modal.userTodosData} 
        isModalActive={modal.isModalActive}
        handleClose={userModalClose}
        />
         : null}
      </div>
    </div>
    
  );
}

export default TableComponents