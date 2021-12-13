import { useEffect, useState } from 'react';

import { Parallax } from 'react-parallax';

import CarouselSection from '../CarouselSection/CarouselSection';
import TextSection from '../TextSection/TextSection';

import './PageSection.css';

const PageSection = (props) => {
	const [sectionType, setSectionType] = useState();
	const [sectionId, setSectionId] = useState();
	const [sectionContent, setSectionContent] = useState();
	const getName = () => {
		let sectionName;
		switch (sectionType) {
			case 'section-types.galerie-d-image':
				sectionName = props.galerie_dimage.Nom;
				break;
			case 'section-types.galerie-texte':
				sectionName = props.galerie_de_texte.Nom;
				break;
			case 'section-types.paragraphe':
				sectionName = props.simple_paragraphe.Nom;
				break;
			default:
				break;
		}
		return sectionName;
	};
	const getChild = () => {
		let child;
		switch (sectionType) {
			case 'section-types.galerie-d-image':
				child = <CarouselSection {...sectionContent}></CarouselSection>;
				break;
			case 'section-types.galerie-texte':
				child = <CarouselSection {...sectionContent}></CarouselSection>;
				break;
			case 'section-types.paragraphe':
				child = <TextSection {...sectionContent}></TextSection>;
				break;
			default:
				break;
		}
		return child;
	};
	

	return (
		<section className="section">
			<div className="section__header">{getName()}</div>
			<Parallax
				bgImage={`http://localhost:1337${props.Fond.url}`}
				bgSize="cover"
				strength={-200}
			>
				<div className="section__content">{getChild()}</div>
			</Parallax>
		</section>
	);
};

export default PageSection;
