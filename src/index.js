import React , {useState , useEffect} from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import 'animate.css';

import jump from 'jump.js'

import A from './1';
import B from './2';

function Asdf(){

	const [count ,setCount] = useState(0);
	const [current , setCurrent] = useState(0);
	const [show , setShow ] = useState(false);

	const goNext = () =>{	
		setCount((count + 1) % 2)
	}

	const toggleContact = () =>{
		if(show){
			setShow(false)
		}
		else{
			setShow(true)
		}
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
					<li onClick={toggleContact}>Contact</li>
				</ul>
			</div>

			<div className={show ? 'contact' : 'contact hidden'}>
				<i className='fa fa-close' onClick={toggleContact}></i>
				
				<div><i className='fab fa-facebook'></i> <a href=''>Heinhtet Naing</a></div>
				<div><i className='fab fa-github'></i> <a href='https://github.com/tedhn'>tedhn</a></div>
				<div><i className='fab fa-discord'></i> <a>C George#2548</a></div>
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