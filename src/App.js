import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';
import SearchBar from './SearchBar';
import searchImages from './api';

export default function App() {

	// const getRandomAnimal = () => {
	//   const animals = ['bird', 'cat', 'elephant', 'horse', 'gator', 'dog', 'dinosaur', 'cow', 'koala', 'hedgehog', 'tiger', 'lion', 'mouse'];
	//   return animals[Math.floor(Math.random() * animals.length)]
	// };

	const [animals, setAnimals] = useState([]);
	// const clickHandler = (ev) => {
	//   setAnimals([...animals, getRandomAnimal()]);
	// };
	
	const handleEnter = async (searchTerm) => {
		if (searchTerm) {
			const response = await searchImages(searchTerm);
			const imagesList = [];
				response.results.map(i => imagesList.push(i.urls.regular));
				setAnimals([...imagesList]);
		} else {
			console.log('Please enter something to fetch images');
		}
	};

	const renderAnimals = () => animals.map(i => <AnimalShow type={i} />)
	return (
		<div className="App">
			<h3>Search for Images</h3>
			<SearchBar onSubmit={handleEnter}/>
			<div className='animals-container'>{renderAnimals()}</div>
		</div>
	);
}
