import React, {useEffect, useRef} from 'react';

export default function HomeForm(){
	const ref = useRef(true)

	useEffect(() => {
		if(ref.current){
			ref.current = false;
			alert(`Users page has been changed to table format.
				   Confirmation before removing a user.
				   Validation added to age.
				   Have a nice day!`);
		}
	}, []);

	return(
		<>
			<div className="div-home">Welcome QMarketz!</div>
		</>
	)
}