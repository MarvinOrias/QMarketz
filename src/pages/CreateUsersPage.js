import React, {useState} from 'react';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

import CreateUserForm from '../components/CreateUserForm';

export default function CreateUserPage(){
	const [fname, setFname] = useState('');
	const [mname, setMname] = useState('');
	const [lname, setLname] = useState('');
	const [address, setAddress] = useState('');
	const [age, setAge] = useState('');
	const navigate = useNavigate();

	const fnameSet = (e) => {
		setFname(e.target.value);
	};

	const mnameSet = (e) => {
		setMname(e.target.value);
	};

	const lnameSet = (e) => {
		setLname(e.target.value);
	};

	const addressSet = (e) => {
		setAddress(e.target.value);
	};

	const ageSet = (e) => {
		setAge(e.target.value);
	};

	function create(e){
		e.preventDefault();

		if(fname === '' || mname === '' || lname === '' || address === '' || age === ''){
			Swal.fire({
				icon: 'warning',
				text: 'All fields required'
			})
		}
		else if(age < 1){
			Swal.fire({
				icon: 'warning',
				text: 'Inavlid age'
			})
		}
		else{
			fetch('https://qmarketz.herokuapp.com/users/create', {
				method: "POST",
				headers: {"Content-Type":"application/json"},
				body: JSON.stringify({
					fname: fname,
					mname: mname,
					lname: lname,
					address: address,
					age: age
				})
				}).then((response) => {
				return response.json();
			}).then((createUsers) => {
				if(createUsers.message === 'User created!'){
					Swal.fire({
						title: "Successful",
						icon: 'success',
						text: `${createUsers.message}`
					})
					navigate('/users');
				}
				else{
					Swal.fire({
						title: "Failed",
						icon: 'error',
						text: `Creation failed`
					})
				}
			})
		}
	}

	return(
		<>
			<CreateUserForm fname={fnameSet} mname={mnameSet} lname={lnameSet} address={addressSet} age={ageSet} submit={create} />
		</>
	)
}