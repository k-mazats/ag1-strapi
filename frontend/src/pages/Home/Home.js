import { getContent, getHero } from '../../api/api';
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import Layout from '../../components/Layout/Layout';
import PageSection from '../../components/PageSection/PageSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Menu.css'

function Home(props) {
	const [content, setContent] = useState();
  const [menuStatus, setMenuStatus] = useState(false);
  const isMenuOpen =  (state) => {
		setMenuStatus(state.isOpen) ;
	};
  const closeMenu = () => {
    setMenuStatus(false)
  }
	useEffect(() => {
		getContent()
			.then((res) => {
				setContent(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<div className="home">
			<Menu isOpen={menuStatus} onStateChange={isMenuOpen}>
				{content && Array.isArray(content)
					? content.map((section, sectionId) => {
							return (
								<a
									href={`#${
										section?.carousel
											? section.carousel.name.split(' ').join('_')
											: section.simple_text.name.split(' ').join('_')
									}`}
									className="menu-item"
									onClick={closeMenu}
								>
									{section?.carousel
										? section.carousel.name
										: section.simple_text.name}
								</a>
							);
					  })
					: null}
			</Menu>
			<Layout>
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

				<ContactForm></ContactForm>
			</Layout>
		</div>
	);
}

export default Home;
