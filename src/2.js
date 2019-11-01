import React from 'react'


export default function B(prop){


	const goBack = () =>{
		prop.setCount(prop.count - 1)
	}

	return(
		<div className='Container2'>
					<div className='back' onClick={goBack}><i className="fa fa-arrow-left"></i></div>
			
		</div>
	)
}