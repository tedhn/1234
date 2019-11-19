import React from 'react'


export default function B(prop){


	const goBack = () =>{
		prop.setCount(prop.count - 1)
	}

	return(
		<div className='Container2'>
			<div className='title'>About Me</div>

			<div className='Content'>Just a dumb 20 year old doing dumber things with his life :D</div>
		</div>
	)
}