import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import CookieNotice from 'react-cookienotice';

import { getContent, getHero } from './api/api';

import { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

import PageSection from './components/PageSection/PageSection';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
	const [content, setContent] = useState();
	const [heroData, setHeroData] = useState();
	const [cookiesConsent, setCookiesConsent] = useState(false);
	const [cookies, setCookie] = useCookies();

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
	useEffect(() => {
		setCookiesConsent(cookies['hide-notice']);
	},[]);
	return (
		<>
			{cookiesConsent ? (
				<GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA}>
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
				</GoogleReCaptchaProvider>
			) : (
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
				</div>
			)}
			<CookieNotice
				onAcceptButtonClick={() => setCookiesConsent(true)}
				onDeclineButtonClick={() => setCookiesConsent(false)}
			/>
		</>
	);
}

export default App;
