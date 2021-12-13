import { getSectionsList } from './api/api';

import { useEffect, useState } from 'react';

import PageSection from './components/PageSection/PageSection';

import './App.css';

function App() {
	const [content, setContent] = useState([]);


	useEffect(() => {
		getSectionsList()
			.then((res) => {
				setContent(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<div className="App">
			<header className="App-header"></header>
			{content.map((section, sectionId) => {
				return (
					<PageSection
						{...section}
						key={`section-${sectionId}`}
					></PageSection>
				);
			})}
		</div>
	);
}

export default App;
