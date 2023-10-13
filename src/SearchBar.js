import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('');

	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSubmit(term);
	}

	const inputHandler = (ev) => {
		setTerm(ev.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={inputHandler} value={term} />
			{term.length < 3 && 'Term should be longer!'}
			
		</form>
	)
}

export default SearchBar;