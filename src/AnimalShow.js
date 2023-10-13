import { useState } from 'react';
import './AnimalShow.css';
// import bird from './animals/bird.svg';
// import cat from './animals/cat.svg';
// import cow from './animals/cow.svg';
// import dinosaur from './animals/dinosaur.jpg';
// import dog from './animals/dog.svg';
// import elephant from './animals/elephant.jpg';
// import gator from './animals/gator.svg';
import heart from './animals/heart.svg';
// import hedgehog from './animals/hedgehog.jpg';
// import horse from './animals/horse.jpg';
// import koala from './animals/koala.jpg';
// import lion from './animals/lion.jpg';
// import mouse from './animals/mouse.jpg';
// import tiger from './animals/tiger.jpg';

// const imageMap = { bird, cat, cow, dinosaur, dog, elephant, gator, heart, hedgehog, horse, koala, lion, mouse, tiger };



const AnimalShow = ({ type }) => {
	const [clickCounter, setclickCounter] = useState(0);
	const imageClickHandler = (ev) => {
		setclickCounter(clickCounter + 1);
	}
	return (
		<div className='animal-image-container'>
			<img className='animal-image' onClick={imageClickHandler} src={type} alt={`${type}-${clickCounter}`} />
			<img style={{ width: 10 + 3 * clickCounter }} src={heart} alt='heart' />
		</div>
	)
}

export default AnimalShow;