import React, {useState, useEffect} from 'react';
import {Row, Col, Modal, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

import UsersForm from '../components/UsersForm';

export default function UsersPage(){
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);
	const [id, setId] = useState('');
	const [fname, setFname] = useState('');
	const [mname, setMname] = useState('');
	const [lname, setLname] = useState('');
	const [address, setAddress] = useState('');
	const [age, setAge] = useState('');

	function modalClose(){
		setShow(false);
	}

	function modalShow(id){
		setId(id);
		setShow(true);
		console.log(id)
	}

	useEffect(() => {
		fetch('https://qmarketz.herokuapp.com/users/all').then((response) => {
			return response.json();
		}).then((users) => {
			setUsers(users.result);
		})
	}, [])

	function updateUser(){
		if(fname === '' || mname === '' || lname === '' || address === '' || age === ''){
			Swal.fire({
				icon: 'warning',
				text: 'All fields required'
			})
		}
		else{
			fetch('https://qmarketz.herokuapp.com/users/update', {
				method: "PUT",
				headers: {
					"Content-Type":"application/json"
				},
				body: JSON.stringify({
					id: id,
					fname: fname,
					mname: mname,
					lname: lname,
					address: address,
					age: age
				})
			}).then((response) => {
				return response.json();
			}).then((updateUser) => {
				if(updateUser.message === 'User info updated!'){
					Swal.fire({
						title: 'Success',
						icon: 'success',
						text: `${updateUser.message}`
					})
					setFname('');
					setMname('');
					setLname('');
					setAddress('');
					setAge('');
					fetch('https://qmarketz.herokuapp.com/users/all').then((response) => {
						return response.json();
					}).then((users) => {
						setUsers(users.result);
					})
				}
			})
		}
	}

	function deleteUser(id){
		fetch('https://qmarketz.herokuapp.com/users/delete', {
			method: "DELETE",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				id: id
			})
		}).then((response) => {
			return response.json();
		}).then((removeUser) => {
			Swal.fire({
				icon: 'success',
				text: `${removeUser.message}`
			})
			fetch('https://qmarketz.herokuapp.com/users/all').then((response) => {
				return response.json();
			}).then((users) => {
				setUsers(users.result);
			})
		})
	}

	const loadedUsers = users.map((newUsers) => {
		return(
			<Col sm={12} md={4}>
				<div key={newUsers._id}>
						<UsersForm id={newUsers._id} fname={newUsers.first_name} mname={newUsers.middle_name} lname={newUsers.last_name} address={newUsers.address} age={newUsers.age} update={() => {modalShow(newUsers._id)}} delete={() => {deleteUser(newUsers._id)}}/>	
				</div>
			</Col>
		)
	})

	return(
		<>
			<Row>
				{loadedUsers}
			</Row>

			<Modal show={show} onHide={modalClose}>
			        <Modal.Header closeButton>
			          <Modal.Title>Update details</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	<Form>
			        	      <Form.Group className="mb-3" controlId="formBasicFname">
			        	        <Form.Label>First name:</Form.Label>
			        	        <Form.Control type="text" onChange={(e) => {setFname(e.target.value)}} />
			        	      </Form.Group>

			        	      <Form.Group className="mb-3" controlId="formBasicMname">
			        	        <Form.Label>Middle Name</Form.Label>
			        	        <Form.Control type="text" onChange={(e) => {setMname(e.target.value)}} />
			        	      </Form.Group>

			        	      <Form.Group className="mb-3" controlId="formBasicLname">
			        	        <Form.Label>Last Name</Form.Label>
			        	        <Form.Control type="text" onChange={(e) => {setLname(e.target.value)}} />
			        	      </Form.Group>

			        	      <Form.Group className="mb-3" controlId="formBasicAddress">
			        	        <Form.Label>Address</Form.Label>
			        	        <Form.Control type="text" onChange={(e) => {setAddress(e.target.value)}} />
			        	      </Form.Group>

			        	      <Form.Group className="mb-3" controlId="formBasicAge">
			        	        <Form.Label>Age</Form.Label>
			        	        <Form.Control type="number" onChange={(e) => {setAge(e.target.value)}} />
			        	      </Form.Group>
			        	    </Form>
			        </Modal.Body>
			        <Modal.Footer>
			         <Button variant="outline-success" onClick={updateUser}>Save changes</Button>
			          <Button variant="secondary" onClick={modalClose}>
			            Cancel
			          </Button>
			        </Modal.Footer>
			      </Modal>
		</>
	)
}