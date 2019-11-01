import React from 'react'

export default function A(prop){

	const goNext = () =>{
		prop.setCount(prop.count + 1)
	}

	return(
		<div className='Container'>
				
				<div className='Login'>
					<div className='Heading'>HELLO</div>
					<div className='Background'>a</div>
					<button onClick={goNext}>Get Started</button>
				</div>
			
		</div>
	)
}