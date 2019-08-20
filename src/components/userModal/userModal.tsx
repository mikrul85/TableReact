import React, { useState } from "react";
import { UserModalProps } from "../types";
import Modal from '@material-ui/core/Modal';
import useStyles from "./styles";
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

function UserModal (props: UserModalProps) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { name, 
          username, 
          email, 
          website, 
          address: {street, suite, city, zipcode, geo: {lat, lng}}, 
          phone,
          company: {name: nameCompany, catchPhrase, bs} 
        } = props.data
        
  const { userTodosData } = props

  return (
    <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={props.isModalActive}
    onClose={props.handleClose}
    >
      <div style={modalStyle} className={classes.paper}> 
        <div >
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>
            <p>Address: {street}, {suite}, {city}, {zipcode} (Geo: {lat}, {lng})</p>
            <p>Company: {nameCompany} ({catchPhrase}: {bs})</p>
        </div>
        <div>
            <p>Todo list:</p>
            <ul>
              {userTodosData.map((item, i) => {
              return (<li key={i}>
                        <p>{ item.completed ? <s>{item.title}</s> : <span>{item.title}</span>}</p>
                     </li>)
              })}
            </ul>           
        </div>
        <Button variant="outlined" color="secondary" className={classes.button} onClick={props.handleClose}>
          Close
        </Button>
      </div> 
    </Modal>
  );
}

export default UserModal