import { getContent, getHero } from './api/api';

import { useEffect, useState } from 'react';

import PageSection from './components/PageSection/PageSection';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
	const [content, setContent] = useState();
	const [heroData, setHeroData] = useState();

	useEffect(() => {
		getContent()
			.then((res) => {
				setContent(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	useEffect(() => {
		getHero()
			.then((res) => {
				setHeroData(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<div className="App">
			{heroData ? <Hero {...heroData}></Hero> : null}
			{content && Array.isArray(content)
				? content.map((section, sectionId) => {
						return (
							<PageSection
								{...section}
								key={`section-${sectionId}`}
							></PageSection>
						);
				  })
				: null}
			{heroData ? (
				<ContactForm background={heroData.background}></ContactForm>
			) : null}
		</div>
	);
}

export default App;
