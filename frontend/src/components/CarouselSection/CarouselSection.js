// import './CarouselSection.css';

const CarouselSection = (props) => {
	// const getName = () => {
	// 	const sectionType = props.__component;
	// 	let sectionName;
	// 	switch (sectionType) {
	// 		case 'section-types.galerie-d-image':
	// 			sectionName = props.galerie_dimage.Nom;
	// 			break;
	// 		case 'section-types.galerie-texte':
	// 			sectionName = props.galerie_de_texte.Nom;
	// 			break;
	// 		case 'section-types.paragraphe':
	// 			sectionName = props.simple_paragraphe.Nom;
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	return sectionName;
	// };
	return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default CarouselSection;
