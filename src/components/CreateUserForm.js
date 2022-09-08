import React, {useEffect} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

export default function usersForm(props){

	return(
		<>
				<div className="create-users-div mt-3">
					<Form onSubmit={props.submit}>
					      <Row>
					      	<Col sm={12} md={6}>
					      		<Form.Group className="mb-3" controlId="formBasictext">
					      		  <Form.Label>First Name</Form.Label>
					      		  <Form.Control type="text" placeholder="Enter first name" onChange={props.fname}/>
					      		</Form.Group>
					      	</Col>

					      	<Col sm={12} md={6}>
					      		<Form.Group className="mb-3" controlId="formBasictext">
					      		  <Form.Label>Middle Name</Form.Label>
					      		  <Form.Control type="text" placeholder="Enter middle name" onChange={props.mname}/>
					      		</Form.Group>
					      	</Col>

					      	<Col sm={12} md={6}>
					      		<Form.Group className="mb-3" controlId="formBasictext">
					      		  <Form.Label>Last Name</Form.Label>
					      		  <Form.Control type="text" placeholder="Enter last name" onChange={props.lname}/>
					      		</Form.Group>
					      	</Col>

					      	<Col sm={12} md={6}>
					      		<Form.Group className="mb-3" controlId="formBasictext">
					      		  <Form.Label>Age</Form.Label>
					      		  <Form.Control type="number" placeholder="Enter age" onChange={props.age}/>
					      		</Form.Group>
					      	</Col>

					      	<Col sm={12}>
					      		<Form.Group className="mb-3" controlId="formBasictext">
					      		  <Form.Label>Address</Form.Label>
					      		  <Form.Control type="text" placeholder="Enter address" onChange={props.address}/>
					      		</Form.Group>
					      	</Col>

					      </Row>


					      <Button variant="success" type="submit" className="mt-2">
					        Submit
					      </Button>
					    </Form> 
				</div>
		</>
	)
}