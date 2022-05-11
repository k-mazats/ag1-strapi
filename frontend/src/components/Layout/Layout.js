import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getHero } from '../../api/api';
const Layout = ({children}) => {
	const [heroData, setHeroData] = useState();
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
		<div>
			{heroData ? <Hero {...heroData}></Hero> : null}
			{children}
			<Footer></Footer>
		</div>
	);
};

export default Layout;
