import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap';

export default function usersForm(props){

	return(
		<>
			<div className="users-div">
				<div>Id: {props.id}</div>
				<div>Name: {props.fname} {props.mname} {props.lname}</div>
				<div>Address: {props.address}</div> 
				<div>Age: {props.age}</div>
				<div className="mt-2"><Button variant="outline-warning" className="me-2" onClick={props.update}>Update</Button><Button variant="outline-danger" onClick={props.delete}>Remove</Button></div>
			</div>
		</>
	)
}