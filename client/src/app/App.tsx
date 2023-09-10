import { useState } from 'react';
import MainPage from '../pages/MainPage/MainPage';
import './styles/App.css';
import './styles/index.css';

function App() {
	const [example, setExample] = useState();

	return (
		<>
			<div className=''>
				<MainPage/>
			</div>
		</>
	);
}

export default App;
