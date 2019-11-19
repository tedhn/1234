import React , {useState , useEffect} from 'react'
import ReactDOM from 'react-dom';
import './index.scss';

import jump from 'jump.js'

import A from './1';
import B from './2';

function Asdf(){

	const [count ,setCount] = useState(0);
	const [current , setCurrent] = useState(0);

	const goNext = () =>{	
		setCount((count + 1) % 2)
	}

	useEffect( ()=>{
		if(count === 0){
			setCurrent(0)
			jump('.Container')
		}
		else if(count === 1){
			setCurrent(1)
			jump('.Container2')
		}
	} , [count])

	return(
		<div className='haha'>

			<div className='navBar'>
				<ul>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div>

			<A/>
			<B/>

			<ul className='scrollBar'>
				<li><i className= {current === 0 ? 'fa fa-circle' : 'fa fa-circle-o' }></i></li>
				<li><i className= {current === 1 ? 'fa fa-circle' : 'fa fa-circle-o' }></i></li>
			</ul>

			<button onClick={goNext}><i className={count === 1 ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i></button>	
		</div>
	)
}

ReactDOM.render(<Asdf />, document.getElementById('root'));