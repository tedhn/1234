import React , { useEffect ,useState } from 'react'
import Typed from 'react-typed'
import WOW from 'wow.js'


export default function A(){

	const [animated , setAnimated ] = useState(false);

	useEffect( ()=>{
		const wow = new WOW({
			live:false,
			callback: changeAnimated,
		});
		wow.init();
	} )

	const changeAnimated = () =>{
		setAnimated(true);
	}


	return(
		<div className='Container'>
				<div className='a'>
					<Typed 
						className='Heading'
						strings={['Hello :D' , 'My name is Ted' , 'AHHHHHHHHHHHHHHHHHHHH']}
						loop={true}
						backDelay={2000}
						startDelay={2000}
						typeSpeed={30}
						backSpeed={50}
					/>

					<div className={animated ? '' : 'wow 	fadeInUp'} data-wow-duration="1s">
						<div className='Content'>Welcome to my dumb site</div>
					</div>
					<div className={animated ? '' : 'wow 	fadeInUp'} data-wow-duration="1s" data-wow-delay="1s">
						<div className='Content'>Feel free to report bugs to me @ discord</div>
					</div>
					<div className={animated ? '' : 'wow 	fadeInUp'} data-wow-duration="1s" data-wow-delay="2s">
						<div className='Content'>Working for mobile now B)</div>
					</div>

				</div>
		</div>
	)
}