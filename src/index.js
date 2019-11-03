import React , {useState , useEffect} from 'react'
import ReactDOM from 'react-dom';
import './index.scss';

import jump from 'jump.js'

import A from './1';
import B from './2'


function Asdf(){

	const [count ,setCount] = useState(0);
	const [current , setCurrent] = useState(0);


	useEffect( ()=>{
		if(count === 1){
			setCurrent(1)
			jump('.Container2')
		}
		else if(count === 0){
			setCurrent(0)
			jump('.Container')
		}
	} , [count])

	return(
		<div className='haha'>
			<A setCount={setCount} count={count}/>
			<B setCount={setCount} count={count}/>


			<ul className='scrollBar'>
				<li><i className= {current === 0 ? 'fa fa-circle' : 'fa fa-circle-o' }></i></li>
				<li><i className= {current === 1 ? 'fa fa-circle' : 'fa fa-circle-o' }></i></li>
			</ul>	
		</div>
	)
}

ReactDOM.render(<Asdf />, document.getElementById('root'));