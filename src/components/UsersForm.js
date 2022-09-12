import React from 'react';
import {Button} from 'react-bootstrap';

export default function usersForm(props){

	return(
		<>
			{/*<div className="users-div">
				<div>Id: {props.id}</div>
				<div>Name: {props.fname} {props.mname} {props.lname}</div>
				<div>Address: {props.address}</div> 
				<div>Age: {props.age}</div>
				<div className="mt-2"><Button variant="outline-warning" className="me-2" onClick={props.update}>Update</Button><Button variant="outline-danger" onClick={props.delete}>Remove</Button></div>
			</div>*/}
			<tr className="usersForm-tr">
				<td className="usersForm-td">{props.id}</td>
				<td className="usersForm-td">{props.fname} {props.mname} {props.lname}</td>
				<td className="usersForm-td">{props.address}</td>
				<td className="usersForm-td">{props.age}</td>
				<td className="usersForm-td"><Button variant="outline-warning" className="me-2" onClick={props.update}>Update</Button><Button variant="outline-danger" onClick={props.delete}>Remove</Button></td>
			</tr>		
		</>
	)
}