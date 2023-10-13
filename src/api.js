import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos';
const Authorization = 'Client-ID jL9bU-l1MxQ2IhVI-15jPUYnEZRh52TQtB872bw5LUM';

const searchImages = async (query = 'himalayas') => {
	const response = await axios.get(url, {headers: {Authorization}, params: {query}});
	return response?.data;
}

export default searchImages;